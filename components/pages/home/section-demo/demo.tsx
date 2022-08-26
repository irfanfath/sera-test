import { FC, useState, useEffect } from "react";
import Image from "next/image";
import io from "socket.io-client";
import { apiOCRExtract, apiOCRMatch, apiOCR, apiPlatExtraction, apiPlatExtractionAnalytics } from "api/ocr";
import { SOCKET_URL, API_URL } from "api/_base";
import { Modal } from "components/elements";

interface IInitOcer {
    filename: string;
    ocrResult: any[];
}

const initStateFile = {
    file: "",
    filePreview: "",
    fileType: "",
};

const initNotif = {
    isShow: false,
    type: "",
    message: "",
};

const initOcr: IInitOcer = {
    filename: "",
    ocrResult: []
};


const HomeDemoProduct: FC = () => {
    const [socketID, setSocketID] = useState("");
    const [demoType, setDemoType] = useState("id-card-extraction");
    const [demoProduct, setDemoProduct] = useState("optical-character-recognition");
    const [fileUpload, setFileUpload] = useState(initStateFile);
    const [notif, setNotif] = useState(initNotif);
    const [transactionID, setTransactionID] = useState("");
    const [dataOCR, setDataOCR] = useState(initOcr);
    const [dataPlatExtract, setDataPlatExtract] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [queryTextOCR, setQueryTextOCR] = useState("");
    const [isOcrMatch, setOcrMatch] = useState("");
    const [isOcrMatchFound, setOcrMatchFound] = useState(false);
    const ocrThreshold = "0.85";
    const linkDoc = `${API_URL}/docx/${transactionID}.docx`;

    const getSocketIDandDataOCR = async () => {
        const socket = await io(SOCKET_URL, {
            reconnection: true,
            reconnectionDelayMax: 50000,
            autoConnect: true,
        });

        if (socket) {
            socket.on("connect", () => {
                setSocketID(socket.id);
                const client = io(`${SOCKET_URL}/${socket.id}`, {
                    reconnection: true,
                    reconnectionDelayMax: 50000,
                    autoConnect: true,
                });

                client.on("analytics", (data) => {
                    setLoading(false);
                    const result = JSON.parse(data);
                    setDataOCR(result);
                    console.log(result)
                    if(result.ocrResult.length > 0){
                        setOcrMatchFound(true);
                        setLoading(false);
                    } else {
                        setOcrMatchFound(false);
                        setLoading(false);
                    }
                });
            });

            socket.on("disconnect", () => {
                console.log("Disconnect to server");
            });
        }
    };

    useEffect(() => {
        getSocketIDandDataOCR();
    }, []);

    const changeTabButton = (e: any) => {
        e.preventDefault();
        setFileUpload(initStateFile);
        setDemoType(e.target.name);
        setDataPlatExtract("");
        setDataOCR(initOcr);
        setQueryTextOCR("");
        setOcrMatch("");
    };

    const changeTabProduct = (e: any) => {
        e.preventDefault();
        setFileUpload(initStateFile);
        setDemoProduct(e.target.name);
        if(e.target.name === 'plat-nomor-extraction-product'){
            setDemoType('plat-nomor-extraction');
        } else if (e.target.name === 'optical-character-recognition'){
            setDemoType('id-card-extraction')
        }
        setDataPlatExtract("");
        setDataOCR(initOcr);
        setQueryTextOCR("");
        setOcrMatch("");
    };

    const onUpload = (e: any) => {
        e.preventDefault();
        const fileUpload = e.target.files[0];
        const fileSize = fileUpload.size;
        const fileType = fileUpload.name.split(".").pop() === "pdf" ? "pdf" : "image";
        const oneMb = 1048576;

        if (fileSize > oneMb) {
            alert("Max. upload 1MB");
        } else {
            setFileUpload({
                file: fileUpload,
                filePreview: fileType === "pdf" ? "/home/logo-pdf.png" : URL.createObjectURL(fileUpload),
                fileType,
            });

            const formData = new FormData();
            formData.append(fileType, fileUpload);
            formData.append("socket_id", socketID);

            if (demoType === "ocr") {
                setLoading(true);
                handleDemoOCR(formData);
            } else if (demoType === "id-card-extraction") {
                setLoading(true);
                handleDemoIDCardExtraction(formData);
            } else if ( demoType === "plat-nomor-extraction") {
                setLoading(true);
                handleDemoPlatExtraction(formData);
            }
        }
    };

    const handleDemoIDCardExtraction = async (payload: any) => {
      try {
        await apiOCRExtract(payload).then((res: any) => {
          setTransactionID(res.data.transaction_id);
        });
      } catch (err:any) {
        setNotif({
          isShow: true,
          type: "error",
          message: err.response?.data?.message,
        });
      }
    };

    const handleDemoOCRMatch = async () => {
      try {
        const formData = new FormData();
        formData.append(fileUpload.fileType, fileUpload.file);
        formData.append("socket_id", socketID);
        formData.append("list_of_words", queryTextOCR);
        formData.append("threshold", ocrThreshold);
        await apiOCRMatch(formData).then((res: any) => {
          setTransactionID(res.data.transaction_id);
          setOcrMatch(res.data.success);
        //   console.log(res.data)
          setLoading(true)
        });
      } catch (err:any) {
        setNotif({
          isShow: true,
          type: "error",
          message: err.response?.data?.message,
        });
      }
    };

    const handleDemoOCR = async (payload: any) => {
      try {
        await apiOCR(payload).then((res: any) => {
          setTransactionID(res.data.transaction_id);
        });
      } catch (err:any) {
        setNotif({
          isShow: true,
          type: "error",
          message: err.response?.data?.message,
        });
      }
    };

    const handleDemoPlatExtraction = async (payload: any) => {
      try {
        await apiPlatExtraction(payload).then((res: any) => {
            // console.log(res.data)
            setTimeout(() => {
                handleDemoPlatExtractionAnalytics(res.data.transaction_id)
                setLoading(false)                
            }, 2000);
        });
      } catch (err:any) {
        setNotif({
          isShow: true,
          type: "error",
          message: err.response?.data?.message,
        });
      }
    };

    const handleDemoPlatExtractionAnalytics = async (trxID: any) => {
      const payload = {
        "transaction_id" : trxID
    }
      try {
        await apiPlatExtractionAnalytics(payload).then((res: any) => {
        //   console.log(res.data)
          setDataPlatExtract(res.data.result)
          setLoading(false)
        });
      } catch (err:any) {
        setNotif({
          isShow: true,
          type: "error",
          message: err.response?.data?.message,
        });
      }
    };

    const reUpload = (e: any) => {
      e.preventDefault();
      setDataOCR(initOcr);
      setDataPlatExtract("");
      setFileUpload(initStateFile);
      setQueryTextOCR("");
      setOcrMatch("");
    };

    const LinkDownload = () => (
        <div className="text-center">
            <div className="row">
                <div className="col-6">
                    <button data-cy="demo-new-upload" className="button" onClick={reUpload}>
                        New Upload
                    </button>
                </div>
                {/* <div className="col-6">
                    <a href={linkDoc} data-cy="demo-download-docx" className="button button--outline" target="_blank" rel="noopener noreferrer">
                        Download Docx
                    </a>
                </div> */}
            </div>
        </div>
    );

    return (
        <div className="home-demo-product">
            <div className="home-tab-rounded">
                <button className={demoProduct === "optical-character-recognition" ? "button active" : "button"} onClick={changeTabProduct} name="optical-character-recognition">
                    Optical Character
                    <br />
                    Recognition
                </button>

                <a href="https://fr.picaso.id" className="button" target="_blank" rel="noopener noreferrer">
                    Facial
                    <br />
                    Recognition
                </a>

                <a href="https://od.picaso.id" className="button" target="_blank" rel="noopener noreferrer">
                    Object
                    <br />
                    Detection
                </a>

                <button className={demoProduct === "plat-nomor-extraction-product" ? "button active" : "button"} onClick={changeTabProduct} name="plat-nomor-extraction-product">
                    Plat Nomor
                    <br />
                    Extraction
                </button>
            </div>

            <div className="home-demo-product__body">
                {isLoading ? (
                    <div data-cy="demo-upload-loading" className="home-demo-product__panel-loading">
                        <i className="shape-ripple"></i> Uploading
                    </div>
                ) : (
                    ""
                )}

                {notif.type === "error" ? (
                    <Modal show={notif.isShow}>
                        <div className="text-center" data-cy="demo-modal-error">
                            <h1 className="modal__title">Invalid</h1>
                            <p>{notif.message}</p>
                            <div className="modal__button">
                                <button className="button w-full" onClick={() => setNotif(initNotif)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}

                <h3 className="home-demo-product__title">File Upload</h3>
                <div className={demoProduct === "optical-character-recognition" ? "show" : "hide"}>
                    <div className="home-demo-product__panel show">
                        <div className="row">
                            <div className="col-5 sm-col-12">
                                {fileUpload.filePreview ? (
                                    <div data-cy="demo-image-preview" className="home-demo__upload" style={{ backgroundImage: `url(${fileUpload.filePreview})` }}></div>
                                ) : (
                                    <label htmlFor="demo_file" className={isLoading ? "home-demo__upload disable" : "home-demo__upload"}>
                                        <input type="file" id="demo_file" onChange={onUpload} data-cy="demo-file-upload" accept="image/png, image/jpg, image/jpeg, application/pdf" disabled={isLoading} />
                                        <Image src="/home/icon-upload.png" alt="Upload Image Demo E-kyc" width="44" height="44" />
                                        <span className="_label">
                                            <b>
                                                Drag & Drop ID Card Image to Upload or <b className="text-red">Browser</b>
                                            </b>
                                        </span>
                                        <span className="_notif">Support file PNG, JPG, PDF and Max size 1Mb</span>
                                    </label>
                                )}
                            </div>
                            <div className="col-7 sm-col-12">
                                <div className="home-demo__tab">
                                    <button className={demoType === "id-card-extraction" ? "active" : ""} data-cy="demo-btn-id-card-extraction" name="id-card-extraction" onClick={changeTabButton}>
                                        ID Card Extraction
                                    </button>

                                    <button className={demoType === "ocr-match" ? "active" : ""} data-cy="demo-btn-ocr-match" name="ocr-match" onClick={changeTabButton}>
                                        OCR Match
                                    </button>

                                    <button className={demoType === "ocr" ? "active" : ""} data-cy="demo-btn-ocr" name="ocr" onClick={changeTabButton}>
                                        OCR
                                    </button>
                                </div>

                                <div className={demoType === "id-card-extraction" ? "show" : "hide"}>
                                    <h4 className="home-demo__title">Show Result</h4>
                                    <div className="home-demo__result">
                                        {dataOCR.filename && (
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>NIK</td>
                                                        <td>: {dataOCR.ocrResult[0]?.nik}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nama</td>
                                                        <td>: {dataOCR.ocrResult[0]?.nama}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>TTL</td>
                                                        <td>: {dataOCR.ocrResult[0]?.ttl}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenis Kelamin</td>
                                                        <td>: {dataOCR.ocrResult[0]?.jenis_kelamin}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Agama</td>
                                                        <td>: {dataOCR.ocrResult[0]?.agama}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gol. Darah</td>
                                                        <td>: {dataOCR.ocrResult[0]?.golongan_darah}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Status</td>
                                                        <td>: {dataOCR.ocrResult[0]?.status_perkawinan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Alamat</td>
                                                        <td>: {dataOCR.ocrResult[0]?.alamat}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RT/RW</td>
                                                        <td>: {dataOCR.ocrResult[0]?.rt_rw}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kel/Desa</td>
                                                        <td>: {dataOCR.ocrResult[0]?.kel_desa}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kecamatan</td>
                                                        <td>: {dataOCR.ocrResult[0]?.kecamatan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Provinsi</td>
                                                        <td>: {dataOCR.ocrResult[0]?.provinsi}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pekerjaan</td>
                                                        <td>: {dataOCR.ocrResult[0]?.pekerjaan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kewarganegaraan</td>
                                                        <td>: {dataOCR.ocrResult[0]?.kewarganegaraan}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Berlaku Hingga</td>
                                                        <td>: {dataOCR.ocrResult[0]?.berlaku_hingga}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                    <br />
                                    <br />
                                    {demoType === "id-card-extraction" && dataOCR.filename ? LinkDownload() : ""}
                                </div>

                                <div className={demoType === "ocr-match" ? "show" : "hide"}>
                                    <h4 className="home-demo__title">What words you find?</h4>
                                    {isOcrMatch ? (
                                        <div className="home-demo__result">
                                            <table style={{ padding: "20px", display: "block" }}>
                                                <tbody>
                                                    <tr>
                                                        <td>Words</td>
                                                        <td>: {queryTextOCR}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Status</td>
                                                        {isOcrMatchFound? <td className="text-success">: Found</td> : <td className="text-danger">: Not Found</td> }
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="row home-demo__search">
                                            <div className="col-8 sm-col-12">
                                                <input
                                                    type="search"
                                                    name="ocr_match"
                                                    className="input"
                                                    placeholder="input words"
                                                    data-cy="demo-input-ocr-match-search"
                                                    value={queryTextOCR}
                                                    onChange={(e: any) => setQueryTextOCR(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-4 sm-col-12">
                                                <button className="button w-full" data-cy="demo-submit-ocr-match-search" onClick={handleDemoOCRMatch} disabled={!fileUpload.file || !queryTextOCR}>
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {demoType === "ocr-match" && dataOCR.filename ? LinkDownload() : ""}
                                </div>

                                <div className={demoType === "ocr" ? "show" : "hide"}>
                                    <h4 className="home-demo__title">Convert to text</h4>
                                    <div className="home-demo__result">{dataOCR.filename && dataOCR.ocrResult.map((data: any, index: number) => <p key={index}>{data.text}</p>)}</div>

                                    {demoType === "ocr" && dataOCR.filename ? LinkDownload() : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={demoProduct === "plat-nomor-extraction-product" ? "show" : "hide"}>
                    <div className="home-demo-product__panel show">
                        <div className="row">
                            <div className="col-5 sm-col-12">
                                {fileUpload.filePreview ? (
                                    <div data-cy="demo-image-preview" className="home-demo__upload" style={{ backgroundImage: `url(${fileUpload.filePreview})` }}></div>
                                ) : (
                                    <label htmlFor="demo_file" className={isLoading ? "home-demo__upload disable" : "home-demo__upload"}>
                                        <input type="file" id="demo_file" onChange={onUpload} data-cy="demo-file-upload" accept="image/png, image/jpg, image/jpeg, application/pdf" disabled={isLoading} />
                                        <Image src="/home/icon-upload.png" alt="Upload Image Demo E-kyc" width="44" height="44" />
                                        <span className="_label">
                                            <b>
                                                Drag & Drop ID Card Image to Upload or <b className="text-red">Browser</b>
                                            </b>
                                        </span>
                                        <span className="_notif">Support file PNG, JPG, PDF and Max size 1Mb</span>
                                    </label>
                                )}
                            </div>
                            <div className="col-7 sm-col-12">
                                <div className="home-demo__tab">
                                    <button className={demoType === "plat-nomor-extraction" ? "active" : ""} data-cy="demo-btn-plat-nomor-extraction" name="plat-nomor-extraction" onClick={changeTabButton}>
                                        Plat Extraction
                                    </button>

                                    {/* <button className={demoType === "plat-match" ? "active" : ""} data-cy="demo-btn-ocr-match" name="plat-match" onClick={changeTabButton}>
                                        Plat Match
                                    </button> */}
                                </div>

                                <div className={demoType === "plat-nomor-extraction" ? "show" : "hide"}>
                                    <h4 className="home-demo__title">Show Result</h4>
                                    <div className="home-demo__result">
                                        {dataPlatExtract && (
                                            <>
                                            <div className="home-demo__title">Nomor extract result</div>
                                            <div className="home-demo__title" style={{fontSize: 25}}>{dataPlatExtract}</div>
                                            </>
                                        )}
                                    </div>
                                    <br />
                                    <br />
                                    {demoType === "plat-nomor-extraction" && dataPlatExtract ? LinkDownload() : ""}
                                </div>

                                <div className={demoType === "plat-match" ? "show" : "hide"}>
                                    <h4 className="home-demo__title">What words you find?</h4>
                                    <div className="row home-demo__search">
                                        <div className="col-8 sm-col-12">
                                            <input
                                                type="search"
                                                name="ocr_match"
                                                className="input"
                                                placeholder="input words"
                                                data-cy="demo-input-ocr-match-search"
                                                value={queryTextOCR}
                                                onChange={(e: any) => setQueryTextOCR(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-4 sm-col-12">
                                            <button className="button w-full" data-cy="demo-submit-ocr-match-search" onClick={handleDemoOCRMatch} disabled={!fileUpload.file || !queryTextOCR}>
                                                Search
                                            </button>
                                        </div>
                                    </div>

                                    {isOcrMatch ? (
                                        <div className="home-demo__result">
                                            <table style={{ padding: "20px", display: "block" }}>
                                                <tbody>
                                                    <tr>
                                                        <td>Words</td>
                                                        <td>: {queryTextOCR}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Status</td>
                                                        <td className="text-success">: {isOcrMatch ? "Found" : "Not Found"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                    {demoType === "plat-match" && dataOCR.filename ? LinkDownload() : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDemoProduct;
