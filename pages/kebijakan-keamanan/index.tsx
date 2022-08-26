import React from "react";

import type { NextPage, GetServerSideProps } from "next";
import Site from "components/layouts/site";
import Image from "next/image";

interface ILogin {
  isLogin: boolean;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;

  return {
    props: {
      isLogin: cookies.token ? true : false,
    },
  };
};

const KebijakanKemanan: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Kebijakan Keamanan picaso",
    description:
      "Startup artificial intelligence pertama dan terbesar di indonesia",
    url: "https://www.picaso.id/kebijakan-keamanan",
    noIndex: false,
    keywords: "Kebijakan kemanan E-kyc picaso telkom",
  };
  const [indo, setIndo] = React.useState(false);

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <div className='card'>
            <div
              className='container'
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={indo}
                    onClick={() => setIndo(!indo)}
                  />
                  <span className='slider round'></span>
                </label>
                &nbsp;&nbsp;
                <Image
                  src='/home/indo.png'
                  title='Picaso'
                  alt='indonesia'
                  width='31'
                  height='31'
                />
              </div>
            </div>

            <div className='page__content'>
              {indo ? (
                <>
                  {" "}
                  <h1>Umum</h1>
                  <p>Kebijakan keamanan informasi memastikan bahwa:</p>
                  <p>
                    Kebijakan Keamanan Informasi ini menjelaskan penggunaan dan
                    perlindungan informasi pribadi di Tribe BSP.
                  </p>
                  <ol type='a'>
                    <li>
                      Informasi akan dilindungi dari akses yang tidak sah.
                    </li>
                    <li>Kerahasiaan informasi akan terjamin.</li>
                    <li>Integritas informasi akan terjamin.</li>
                    <li>
                      Ketersediaan informasi untuk proses bisnis akan tetap
                      terjaga.
                    </li>
                    <li>Persyaratan legislatif dan peraturan akan dipenuhi.</li>
                    <li>
                      Rencana kesinambungan bisnis akan dikembangkan,
                      dipelihara, dan diuji.
                    </li>
                    <li>
                      Pelatihan keamanan informasi akan diberikan kepada semua
                      karyawan.
                    </li>
                    <li>
                      Semua pelanggaran keamanan informasi aktual atau yang
                      dicurigai akan dilaporkan manager terkait, diselidiki dan
                      solusi / tindakan yang tepat diterapkan.
                    </li>
                  </ol>
                  <h2>Persyaratan Privasi Khusus</h2>
                  <ol type='1'>
                    <li>
                      Perlindungan Data Pribadi dalam Sistem Elektronik mencakup
                      perlindungan terhadap perolehan, pengumpulan, pengolahan,
                      penganalisisan, penyimpanan, penampilan, pengumuman,
                      pengiriman, penyebarluasan dan/atau pembukaan akses, dan
                      pemusnahan Data Pribadi.
                    </li>
                    <li>
                      Data Pribadi harus disimpan, dirawat, dan dijaga kebenaran
                      serta dilindungi kerahasiaannya.
                    </li>
                    <li>
                      Data Pribadi bersifat rahasia sehingga dilarang untuk
                      disebarluaskan dan terdapat sanksi pidana terkait
                      penyebaran Data Pribadi yang tidak sesuai dengan regulasi
                      dan peruntukannya.
                    </li>
                    <li>
                      Data pribadi harus akurat dan lengkap, dan jika perlu data
                      selalu diperbaharui. Setiap langkah yang wajar harus
                      diambil untuk memastikan bahwa data pribadi yang tidak
                      akurat atau tidak lengkap dihapus atau diperbaiki.
                    </li>
                    <li>
                      Individu harus diberi kesempatan untuk memeriksa, dan
                      mengeluarkan keluhan tentang, ketidakakuratan dan
                      ketidaklengkapan dalam catatan yang berisi data pribadi.
                    </li>
                    <li>
                      Data pribadi tidak boleh disimpan dalam bentuk yang
                      memungkinkan identifikasi individu lebih lama dari yang
                      diperlukan untuk tujuan pengumpulan data atau pemrosesan
                      lebih lanjut.
                    </li>
                    <li>
                      Data pribadi hanya dapat diproses jika:
                      <ol type='a'>
                        <li>
                          Individu telah memberikan persetujuannya dengan jelas.
                        </li>
                        <li>
                          Pemrosesan diperlukan untuk pelaksanaan kontrak di
                          mana individu menjadi pihak terkait.
                        </li>{" "}
                        <li>
                          Pemrosesan diperlukan untuk menanggapi permintaan yang
                          dibuat oleh individu.
                        </li>
                        <li>
                          Pemrosesan diperlukan untuk memenuhi kewajiban hukum
                          yang menjadi tanggung jawab Pemilik.
                        </li>
                        <li>
                          Pemrosesan diperlukan untuk melindungi kepentingan
                          individu yang vital. Pemrosesan diperlukan untuk
                          mengeksplorasi atau menyediakan produk atau layanan
                          bisnis baru yang mungkin berguna bagi Pemilik, selama
                          produk atau layanan baru ini tidak mengesampingkan hak
                          atau kebebasan dasar individu.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Pemrosesan data pribadi yang mengungkapkan asal ras atau
                      etnis, pendapat politik, keyakinan agama atau filosofis,
                      keanggotaan serikat pekerja, tindak pidana, kesehatan,
                      atau kehidupan seks dilarang kecuali:
                      <ol type='a'>
                        <li>
                          Individu telah memberikan persetujuan eksplisit untuk
                          pemrosesan tersebut.
                        </li>
                        <li>
                          Pemrosesan diperlukan untuk keperluan pelaksanaan
                          kewajiban dan hak khusus Pemilik di bidang hukum
                          ketenagakerjaan.
                        </li>{" "}
                      </ol>
                    </li>
                  </ol>
                  <h2>Hak Individu Untuk Menolak</h2>
                  <p>
                    Individu dapat menolak tanpa biaya mengenai pemrosesan data
                    pribadi yang dilakukan oleh Pemilik untuk tujuan bisnis.
                    Pemilik harus menyediakan mekanisme pemrosesan cepat yang
                    mengizinkan individu yang keberatan untuk dihapus dari
                    daftar pemrosesan data pribadi untuk tujuan bisnis.
                  </p>
                  <p>
                    Individu harus diberitahu sebelum data pribadi diungkapkan
                    untuk pertama kalinya kepada pihak ketiga atau digunakan
                    atas nama mereka untuk tujuan bisnis. Individu harus secara
                    tegas ditawarkan hak untuk menolak pengungkapan atau
                    penggunaan tersebut tanpa biaya. Pemilik harus menyediakan
                    mekanisme pemrosesan yang mengizinkan individu yang
                    berkeberatan untuk memblokir pengungkapan semacam itu.
                  </p>
                  <h2>Pengungkapan Data Pribadi Kepada Pihak Ketiga</h2>
                  <p>
                    Tribe BSP dapat memberikan data pribadi yang diproses kepada
                    pihak ketiga pada sistemnya untuk tujuan bisnis yang
                    diterima secara umum seperti perintah pengadilan, panggilan
                    pengadilan, verifikasi pekerjaan, lisensi pemerintah,
                    penjaminan emisi, dan alasan lainnya. Semua penerima
                    informasi tersebut harus secara definitif mengidentifikasi
                    diri mereka sendiri, menyatakan secara tertulis tujuan hukum
                    dan adat di mana informasi tersebut dicari dan menyatakan
                    bahwa data pribadi tidak akan digunakan untuk tujuan lain.
                  </p>
                  <p>
                    Semua pengungkapan kepada lembaga pemerintah dan pihak
                    ketiga lainnya harus didahului dengan pemberitahuan tertulis
                    atau pemberitahuan lain yang dikirimkan kepada individu
                    tersebut. Persetujuan satu kali mengenai pengungkapan
                    tersebut sudah cukup.
                  </p>
                  <h2>Memproses Kerahasiaan Dan Keamanan</h2>
                  <p>
                    Pemilik harus menerapkan langkah-langkah teknis dan
                    organisasi yang sesuai untuk melindungi data pribadi dari
                    perusakan yang tidak disengaja atau melanggar hukum,
                    kehilangan yang tidak disengaja, perubahan yang tidak sah,
                    dan pengungkapan atau akses yang tidak sah.
                  </p>
                  <p>
                    Sistem informasi atau staf Tribe BSP tidak boleh
                    menghubungkan informasi anonim tentang perilaku atau
                    aktivitas individu dengan informasi pengenal pribadi kecuali
                    individu yang terlibat telah memberikan persetujuan mereka.
                  </p>
                  <p>
                    Semua akses pengguna ke sistem pemrosesan dan jaringan yang
                    berisi data pribadi harus dicatat sehingga setiap akses
                    terbaru ke data pribadi dapat dilacak. Penjaga sistem dan
                    jaringan ini bertanggung jawab atas pemantauan rutin log
                    tersebut dan tindak lanjut atas kejadian potensial yang
                    relevan dengan keamanan.
                  </p>
                  <h2>Pemantauan Kegiatan Internal</h2>
                  <p>
                    Secara umum, Tribe BSP tidak melakukan pemantauan menyeluruh
                    terhadap komunikasi internal. Namun, berhak setiap saat
                    untuk memantau, mengakses, mengambil, membaca, atau
                    mengungkapkan komunikasi internal ketika ada kebutuhan
                    bisnis yang sah yang tidak dapat dipenuhi dengan cara lain,
                    individu yang terlibat tidak tersedia dan waktu sangat
                    penting untuk aktivitas bisnis.
                  </p>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <h1>General</h1>
                  <p>
                    This Information Security Policy describes the use and
                    protection of personal information in Tribe BSP.
                  </p>
                  <p>The security policy ensures that:</p>
                  <ol type='a'>
                    <li>
                      Information will be protected from unauthorized access.
                    </li>
                    <li>Confidentiality of information will be guaranteed.</li>
                    <li>
                      The integrity of the information will be guaranteed.
                    </li>
                    <li>
                      The availability of information for business processes
                      will be maintained.
                    </li>
                    <li>
                      Legislative and regulatory requirements will be met.
                    </li>
                    <li>
                      A business continuity plan will be developed, maintained
                      and tested.
                    </li>
                    <li>
                      Information security training will be provided to all
                      employees.
                    </li>
                    <li>
                      All actual or suspected information security breaches will
                      be reported to the relevant manager, investigated and
                      appropriate solutions/actions implemented
                    </li>
                  </ol>
                  <h2>Special Privacy Requirements</h2>
                  <ol type='1'>
                    <li>
                      Protection of personal Data in electronic systems includes
                      protection against the acquisition, collection,
                      processing, analysis, storage, appearance, announcement,
                      transmission, dissemination and/or opening of access, and
                      destruction of personal Data.
                    </li>
                    <li>
                      Personal data must be kept, maintained, and kept true and
                      protected confidentiality.
                    </li>
                    <li>
                      Personal Data is confidential so it is prohibited to
                      disseminate and there are criminal sanctions related to
                      the dissemination of personal Data that is not in
                      accordance with the regulations and their designation.
                    </li>
                    <li>
                      Personal data must be accurate and complete, and if
                      necessary the data is always updated. Every reasonable
                      step should be taken to ensure that inaccurate or
                      incomplete personal data is deleted or corrected.
                    </li>
                    <li>
                      Individuals should be given the opportunity to examine,
                      and issue complaints about, inaccuracies and
                      incompleteness in records containing personal data.
                    </li>
                    <li>
                      Personal data should not be stored in a form that allows
                      the identification of an individual for longer than is
                      necessary for the purpose of data collection or further
                      processing.
                    </li>
                    <li>
                      Personal Data can only be processed if:
                      <ol type='a'>
                        <li>The individual has given his consent clearly.</li>
                        <li>
                          Processing is necessary for the execution of contracts
                          in which individuals are related parties.
                        </li>
                        <li>
                          Processing is necessary to respond to requests made by
                          individuals.
                        </li>
                        <li>
                          Processing is necessary to fulfill the legal
                          obligations for which the owner is responsible.
                        </li>
                        <li>
                          Processing is necessary to protect vital individual
                          interests. Processing is necessary to explore or
                          provide new business products or services that may be
                          useful to the owner, as long as these new products or
                          services do not override the basic rights or freedoms
                          of the individual.
                        </li>
                      </ol>
                    </li>
                    <li>
                      The processing of personal data revealing racial or ethnic
                      origin, political opinions, religious or philosophical
                      beliefs, union membership, criminal offenses, health or
                      sex life is prohibited unless:
                      <ol type='a'>
                        <li>
                          The individual has given explicit consent to such
                          processing.
                        </li>
                        <li>
                          Processing is necessary for the purposes of the
                          implementation of the owner&apos;s special obligations
                          and rights in the field of labor law.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <h2>2.3 The Right Of Individuals To Refuse</h2>
                  <p>
                    Individuals may object without charge regarding the
                    processing of personal data carried out by the owner for
                    business purposes. The owner must provide a quick processing
                    mechanism that allows objecting individuals to be removed
                    from the personal data processing register for business
                    purposes.
                  </p>
                  <p>
                    Individuals must be notified before personal data is
                    disclosed for the first time to a third party or used on
                    their behalf for business purposes. Individuals should be
                    expressly offered the right to object to such disclosure or
                    use at no charge. The owner must provide a processing
                    mechanism that allows objecting individuals to block such
                    disclosure.
                  </p>
                  <h2>2.4 Disclosure Of Personal Data To Third Parties</h2>
                  <p>
                    Tribe BSP may provide processed personal data to third
                    parties on its systems for generally accepted business
                    purposes such as court orders, subpoenas, employment
                    verification, government licenses, underwriting, and other
                    reasons. All recipients of such information must
                    definitively identify themselves, state in writing the legal
                    and customary purposes for which such information is sought
                    and state that the personal data will not be used for any
                    other purpose.
                  </p>
                  <p>
                    All disclosures to government agencies and other third
                    parties must be preceded by written notice or other notice
                    sent to the individual. One-time consent to such disclosure
                    is sufficient.
                  </p>
                  <h2>2.5 Processing Confidentiality And Security</h2>
                  <p>
                    The owner shall apply appropriate technical and
                    organizational measures to protect personal data from
                    accidental or unlawful destruction, accidental loss,
                    unauthorized alteration, and unauthorized disclosure or
                    access.
                  </p>
                  <p>
                    Tribe BSP information systems or staff may not link
                    anonymous information about an individual&apos;s behavior or
                    activities with personally identifiable information unless
                    the individual involved has given their consent.
                  </p>
                  <p>
                    All user access to processing systems and networks
                    containing personal data must be recorded so that any recent
                    access to personal data can be tracked. These system and
                    network guards are responsible for the regular monitoring of
                    those logs and the follow-up of potential security-relevant
                    events.
                  </p>
                  <h2>2.6 Monitoring Of Internal Activities</h2>
                  <p>
                    In general, Tribe BSP does not conduct thorough monitoring
                    of internal communications. However, it reserves the right
                    at any time to monitor, access, retrieve, read, or disclose
                    internal communications when there is a legitimate business
                    need that cannot be met by other means, the individuals
                    involved are unavailable and time is critical to business
                    activity.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default KebijakanKemanan;
