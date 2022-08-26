import type { NextPage, GetServerSideProps } from "next";
import Site from "components/layouts/site";
import Link from "next/link";

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

const PrivacyPolicy: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Privacy Policy",
    description: "Kebijakan Privasi (Privacy Policy) untuk Picaso.id",
    url: "https://www.picaso.id/privacy-policy",
    noIndex: false,
    keywords: "picaso ekyc privacy and policy",
  };

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <div className='card'>
            <div className='page__content'>
              <h1>Kebijakan Privasi</h1>
              <p>
                Picaso dan TELKOM menyadari bahwa informasi Pengguna dan/atau
                Pelanggan bersifat rahasia dan pribadi, oleh karena itu Kami
                berkomitmen untuk melindungi dan merahasiakan data Pengguna
                dan/atau Pelanggan sesuai dengan peraturan perundang-undangan.
              </p>

              <h2>1. Perolehan dan Pengumpulan Data Pribadi</h2>
              <ol type='a'>
                <li>
                  Perolehan dan pengumpulan data pribadi yang dilakukan oleh
                  Picaso dibatasi pada informasi yang relevan dan sesuai dengan
                  tujuannya, yang meliputi:
                  <ol type='i'>
                    <li>Email; dan</li>
                    <li>Nama Perusahaan;</li>
                  </ol>
                </li>
                <li>
                  Selain dari Data Pribadi yang dimaksud pada Poin 1a, Picaso
                  dapat meminta Data Pribadi Lainnya di kemudian hari yang
                  sesuai dengan kebutuhan.
                </li>
                <li>
                  Dengan memberikan Data Pribadi sebagaimana Poin 1a di atas
                  pada saat melakukan Registrasi pada Situs, Pengguna dan/atau
                  Pelanggan berarti menyetujui pemberian data untuk digunakan
                  oleh TELKOM menyelenggarakan Layanan Picaso.
                </li>
                <li>
                  Data Pribadi yang diberikan merupakan Data Pengguna dan/atau
                  Pelanggan yang benar. Apabila Pengguna dan/atau Pelanggan
                  memberikan pernyataan dan jaminan, informasi atau data pribadi
                  yang tidak benar, tidak jelas, tidak akurat, atau tidak
                  lengkap, maka Picaso berhak menolak permohonan pembuatan Akun
                  Picaso dan menangguhkan atau memberhentikan sebagian atau
                  seluruh Layanan Picaso yang diberikan kepada Pengguna dan/atau
                  Pelanggan. Pengguna dan/atau Pelanggan bertanggung jawab
                  sepenuhnya atas Data yang diberikan dan melepaskan TELKOM dari
                  seluruh konsekuensi yang timbul.
                </li>
              </ol>

              <h2>2. Pengolahan dan Penganalisaan Data Pribadi</h2>
              <p>
                Data Pengguna dan/atau Pelanggan akan digunakan dalam rangka
                penyelenggaraan Layanan Picaso, baik untuk saat ini maupun untuk
                pengembangan Layanan di kemudian hari.
              </p>

              <h2>3. Penyimpanan Data Pribadi</h2>
              <ol type='a'>
                <li>
                  Data Pribadi Pengguna dan/atau Pelanggan yang disimpan dalam
                  Picaso telah melalui proses verifikasi dan terenkripsi selama
                  Layanan beroperasi.
                </li>
                <li>
                  Apabila Layanan Picaso sudah tidak beroperasi, Picaso berhak
                  menyimpan dan menggunakan Data Pribadi Pengguna dan/atau
                  Pelanggan sampai paling lama 5 (lima) tahun.
                </li>
                <li>
                  <b>Picaso</b> menggunakan database internal dengan
                  infrastruktur & server internal milik Telkom dan tidak
                  menggunakan third party, cloud, atau semacamnya untuk
                  menampung perolehan dan pengumpulan data pribadi, serta
                  menggunakan perangkat lunak yang legal.
                </li>
                <li>
                  <b>Picaso</b> menggunakan database dengan infrastruktur &
                  server Pihak Ketiga (third party), cloud, atau semacamnya
                  untuk menampung perolehan dan pengumpulan data pribadi, serta
                  menggunakan perangkat lunak yang legal. (User dapat memilih
                  Poin c/d tergantung server mana yang digunakan oleh Aplikasi)*
                </li>
              </ol>

              <h2>4. Keamanan dan Privasi Data Pelanggan</h2>
              <ol type='a'>
                <li>
                  <b>Keamanan</b>
                  <ol type='i'>
                    <li>
                      Kami menjaga tindakan teknis dan organisasi, kontrol
                      internal, dan rutinitas keamanan data yang dimaksudkan
                      untuk melindungi Data Pengguna dan/atau Pelanggan dari
                      kehilangan atau perubahan yang tidak disengaja,
                      pengungkapan atau akses yang tidak sah, atau perusakan
                      yang melanggar hukum.
                    </li>
                    <li>
                      Pengguna dan/atau Pelanggan bertanggung jawab terhadap
                      keamanan Data Pribadi yang digunakan untuk mengoperasikan
                      Layanan termasuk di dalamnya password, kode OTP, atau kode
                      keamanan <i>(security code)</i> lainnya untuk mencegah
                      penyalahgunaan pihak lain.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>Privasi</b>
                  <p>
                    Data Pribadi Pengguna dan/atau Pelanggan akan digunakan
                    hanya untuk keperluan penyelenggaraan Layanan Picaso dan
                    tidak akan diserahkan, ditampilkan, diungkapkan kepada pihak
                    ketiga tanpa persetujuan Pengguna dan/atau Pelanggan,
                    kecuali terdapat permintaan data dari Aparat Penegak Hukum
                    atau Pejabat yang berwenang lainnya maupun karena diwajibkan
                    oleh peraturan perundang-undangan.
                  </p>
                </li>
              </ol>

              <h2>5. Penggunaan Data Pelanggan</h2>
              <ol type='a'>
                <li>
                  Kami hanya akan menggunakan Data Pengguna dan/atau Pelanggan
                  untuk dapat menghubungi Pengguna dan/atau Pelanggan
                  sewaktu-waktu jika diperlukan serta untuk kepentingan
                  peningkatan Layanan.
                </li>
                <li>
                  Kami tidak akan menggunakan Data Pengguna dan/atau Pelanggan
                  atau memperoleh informasi darinya untuk keperluan iklan atau
                  tujuan komersial lainnya tanpa persetujuan Pengguna dan/atau
                  Pelanggan.
                </li>
              </ol>

              <h2>6. Perbaikan dan Pembaruan Data Pribadi</h2>
              <p>
                Pengguna dan/atau Pelanggan menyatakan bersedia dan menjamin
                untuk senantiasa memperbaharui data pribadi melalui situs
                <Link href='/'> https://picaso.id</Link> apabila ada perubahan
                data yang terkait dengan Pengguna dan/atau Pelanggan.
              </p>

              <h2>
                7. Penampilan, Pengumuman, Transfer, Penyebarluasan, atau
                Pengungkapan
              </h2>
              <p>
                <b>Picaso</b>
              </p>
              <p>
                Dengan ini menjamin bahwa Picaso hanya akan menampilkan,
                mengumumkan, mengirimkan, menyebarluaskan, dan/atau membuka
                akses data pribadi dalam sistem berdasarkan keadaan seperti
                berikut:
              </p>
              <ol type='a'>
                <li>
                  Atas Persetujuan Pengguna dan/atau Pelanggan kecuali
                  ditentukan lain oleh ketentuan perundang-undangan;
                </li>
                <li>
                  Telah dilakukan verifikasi keakuratan dan kesesuaian dengan
                  tujuan perolehan dan pengumpulan data pribadi tersebut; dan
                </li>
                <li>
                  Untuk keperluan proses penegakan hukum, di mana penyelenggara
                  sistem elektronik wajib memberikan data pribadi yang terdapat
                  dalam sistem elektronik atau data pribadi yang dihasilkan oleh
                  sistem elektronik atas permintaan yang sah dari aparat penegak
                  hukum berdasarkan ketentuan peraturan perundang-undangan.
                </li>
              </ol>

              <h2>
                8. Penghapusan atau Pengakhiran akun <i>(opsional)</i>
              </h2>
              <p>
                Pemusnahan data pribadi dalam Picaso hanya dapat dilakukan jika:
              </p>
              <ol type='a'>
                <li>
                  Telah melewati ketentuan jangka waktu penyimpanan data pribadi
                  dalam sistem elektronik berdasarkan peraturan
                  perundang-undangan atau sesuai dengan ketentuan peraturan
                  perundang-undangan lainnya yang secara khusus mengatur di
                  masing-masing instansi pengawas dan pengatur sektor untuk itu;
                  atau
                </li>
                <li>
                  Dengan mengesampingkan Poin 3b, Pengguna dan/atau Pelanggan
                  dapat mengajukan Permohonan Penghapusan Data Pribadi apabila
                  Pengguna dan/atau Pelanggan tidak lagi menggunakan Layanan
                  Picaso.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default PrivacyPolicy;
