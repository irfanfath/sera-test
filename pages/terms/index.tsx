/* eslint-disable react/no-unescaped-entities */
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

const Terms: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Terms and conditions",
    description: "Terms of use untuk Picaso.id",
    url: "https://www.picaso.id/term",
    noIndex: false,
    keywords: "term Teknologi e-KYC ",
  };

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <div className='card'>
            <div className='page__content'>
              <h1>Terms & Conditions Picaso</h1>
              <h2>Selamat datang di Picaso!</h2>
              <p>
                Terima kasih atas ketertarikan Anda menggunakan Picaso. Dengan
                membuat Akun Picaso atau menggunakan services Picaso, Anda
                menyatakan telah membaca, memahami, dan menyetujui Ketentuan
                Penggunaan ini. Picaso menyediakan berbagai jenis Layanan, oleh
                karenanya beberapa syarat dan ketentuan tambahan dapat berlaku
                pada saat Anda menggunakan Layanan Picaso tersebut.
              </p>
              <p>
                Ketentuan Penggunaan ini mungkin diubah atau diperbaharui baik
                sebagian maupun seluruhnya dari waktu ke waktu tanpa
                pemberitahuan sebelumnya kepada Pengguna, dan akan berlaku sejak
                diunggah pada web showcase Picaso. Picasso menyarankan agar
                Pengguna memeriksa web showcase Picaso untuk mengetahui
                perubahan apapun atas Ketentuan Penggunaan ini dari waktu ke
                waktu. Dengan tetap mengakses Akun Picaso atau menggunakan
                Services Picaso, maka Pengguna dianggap menyetujui perubahan
                atas Ketentuan Penggunaan ini. Apabila Pengguna tidak menyetujui
                perubahan Ketentuan Penggunaan, Pengguna dapat menghubungi Kami
                untuk melakukan pengakhiran Akun Picaso.
              </p>
              <p>
                Picaso (selanjutnya disebut “[Nama Brand/Nama Aplikasi]” atau
                “Layanan” atau “Kami”) merupakan platform API-as-as Service yang
                dikelola oleh PT Telekomunikasi Indonesia Tbk (selanjutnya
                disebut “TELKOM”).
              </p>
              <p>
                Saat menggunakan Layanan Picaso, Pelanggan (selanjutnya disebut
                “Anda” atau “Pelanggan”) tunduk pada pedoman, aturan, atau
                ketentuan yang berlaku, yang dapat diperbarui dari waktu ke
                waktu. Semua pedoman, aturan, atau ketentuan (termasuk dan tidak
                terbatas pada Kebijakan Privasi Picaso). Picaso juga dapat
                menawarkan Layanan lain yang diatur oleh ketentuan layanan ini
                atau yang berbeda.
              </p>
              <p>
                Dengan mendaftar dan/atau menggunakan situs{" "}
                <Link href='/'>https://picaso.id </Link>
                maka Anda dianggap telah membaca, mengerti, memahami, dan
                menyetujui semua isi Ketentuan Penggunaan ini. Jika Anda tidak
                menerima dan menyetujui salah satu, sebagian, atau seluruh isi
                Ketentuan Penggunaan ini, maka Anda tidak dapat menggunakan
                Layanan.
              </p>

              <h3>1. Definisi</h3>
              <p>
                Istilah yang dimuat dalam Ketentuan ini merujuk kepada definisi
                sebagai berikut:
              </p>
              <ol type='a'>
                <li>
                  <b>Akun</b> adalah akun yang telah didaftarkan oleh Pengguna
                  dan/ atau Pelanggan pada situs Picaso.
                </li>
                <li>
                  <b>Data Pribadi</b> adalah setiap informasi tentang seseorang
                  baik yang teridentifikasi dan/atau dapat diidentifikasi yang
                  dengan karenanya seseorang yang dapat diidentifikasi tersebut
                  menjadi teridentifikasi, baik secara langsung maupun tidak
                  langsung, baik berdasarkan salah satu maupun gabungan darinya,
                  baik melalui sistem elektronik maupun non Electronic.
                  Informasi yang dimaksud termasuk namun tidak terbatas pada
                  nama seseorang, nomor identitas, nomor handphone, lokasi,
                  identitas dalam jaringan sistem elektronik, dan hal-hal lain
                  yang berkaitan dengan orang tersebut.
                </li>
                <li>
                  <b>Data Profil</b> adalah data yang terdapat pada halaman
                  profil bagi Pengguna dan/ atau Pelanggan.
                </li>
                <li>
                  <b>Pelanggan</b> adalah Pengguna yang sudah menggunakan
                  Layanan yang terdapat pada Picaso.
                </li>
                <li>
                  <b>Pengguna</b> adalah Pengunjung Layanan dan/atau situs
                  <Link href='/'> https://picaso.id</Link>.
                </li>
              </ol>

              <h3>2. Penggunaan Akun dan Perilaku</h3>
              <h4>2.1 Picaso e-KYC, Face recognition, Object Detection, </h4>
              <ol type='a'>
                <li>
                  Hanya Pengguna yang memiliki akun yang dapat menggunakan
                  layanan.
                </li>
                <li>
                  Untuk membuat Akun Percobaan, Anda dapat diminta untuk
                  memberikan beberapa informasi dan data pribadi Anda.
                  Sehubungan dengan pembuatan Akun dan penggunaan Layanan , Anda
                  setuju untuk memberikan informasi dan data pribadi Anda secara
                  benar, jelas, akurat, dan lengkap kepada ketika diminta,
                  sekurang-kurangnya berupa;
                  <ol type='i'>
                    <li>Email; dan</li>
                    <li>Nama Perusahaan;</li>
                  </ol>
                </li>
                <li>
                  Untuk meningkatkan status dari dari Akun Percobaan. Selain
                  dari informasi dan Data Pribadi yang dimaksud pada Poin 2.1.b,
                  dapat meminta Data Lainnya di kemudian hari yang sesuai dengan
                  kebutuhan.
                </li>
                <li>
                  Anda bertanggung jawab untuk menjaga kerahasiaan dan keamanan
                  akun dan <i>password</i> Anda.
                </li>
                <li>
                  Layanan pada dasarnya tidak ditujukan untuk digunakan oleh
                  Pengguna dan/atau Pelanggan di bawah umur, yaitu setiap orang
                  yang belum mencapai batas usia dewasa atau usia cakap menurut
                  yurisdiksi. Pengguna dan/atau Pelanggan berusia di bawah umur
                  yang menggunakan Layanan menjadi tanggung jawab pribadi
                  orangtua/wali dari Pengguna dan/atau Pelanggan.
                </li>
                <li>
                  Apabila Anda memberikan pernyataan dan jaminan, informasi atau
                  data pribadi yang tidak benar, tidak jelas, tidak akurat, atau
                  tidak lengkap, maka Picaso berhak menolak permohonan pembuatan
                  Akun Picaso dan menangguhkan atau memberhentikan sebagian atau
                  seluruh Layanan Picaso yang diberikan kepada Anda.
                </li>
                <li>
                  Kita berhak menganggap dan memperlakukan seluruh aktivitas
                  yang dilakukan melalui Akun sebagai aktivitas yang telah
                  dilakukan oleh pemegang Akun.
                </li>
                <li>
                  Anda bertanggung jawab atas segala kerugian dan akibat hukum
                  yang timbul dari kesalahan atau kelalaian Anda dalam menjaga
                  kerahasiaan password Akun Anda.
                </li>
                <li>
                  Anda menyetujui untuk segera memberitahukan mengenai setiap
                  dugaan atau aktivitas penggunaan Akun atau password secara
                  tidak berwenang atau pelanggaran keamanan lainnya yang
                  berkaitan dengan akun Anda secepat mungkin.
                </li>
                <li>
                  Apabila terdeteksi bahwa Anda tidak melakukan aktivitas apapun
                  pada situs maupun aplikasi dalam jangka waktu 1 (satu) tahun,
                  berhak untuk menonaktifkan akun Anda.
                </li>
              </ol>

              <h3>3. Hak Kekayaan Intelektual</h3>
              <p>
                Hak Atas Kekayaan Intelektual terkait dengan Layanan ini adalah
                milik PICASO yang diperoleh dengan cara yang sah dan tidak
                melanggar peraturan perundang-undangan yang berlaku di
                Indonesia. Tidak ada hak atau izin yang diberikan baik secara
                langsung atau tidak langsung kepada Pengguna dan/atau Pelanggan
                atau pihak mana pun yang mengakses situs untuk menggunakan atau
                memperbanyak Kekayaan Intelektual, dan tidak ada pihak yang
                dapat mengklaim hak atas, kepemilikan atau kepentingan apapun di
                dalamnya. Anda tidak diperbolehkan untuk mengubah salinan dalam
                bentuk kertas maupun digital dari materi apapun. Apabila Anda
                menemukan terdapat pelanggaran hak kekayaan intelektual, dapat
                melaporkan ke Picaso dengan menhubungi kontak yang tersedia.
              </p>

              <h3>4. Larangan dan Batasan Tanggung jawab</h3>
              <p>
                Tidak ada seorangpun yang diperbolehkan melakukan upaya dan/atau
                yang dapat dianggap upaya untuk mengumpulkan, mengolah dan/atau
                mengungkapkan Data yang terkandung dalam sistem elektronik
                Picaso untuk tujuan yang melanggar peraturan perundang-undangan.
              </p>
              <p>
                Tidak ada seorangpun yang diperbolehkan menggunakan situs Picaso
                untuk melanggar keamanan atau integritas jaringan, komputer atau
                sistem komunikasi apa pun, aplikasi perangkat lunak, atau
                jaringan atau perangkat komputasi (masing-masing, "Sistem").
              </p>
              <p>
                Kegiatan yang dilarang termasuk mengakses atau menggunakan
                Sistem apa pun tanpa izin, termasuk mencoba menyelidiki,
                memindai, atau menguji kerentanan Sistem atau untuk melanggar
                segala tindakan keamanan atau otentikasi yang digunakan oleh
                suatu Sistem.
              </p>
              <p>
                Picaso tidak bertanggung jawab atas pengumpulan, pengolahan
                dan/atau pengungkapan yang dilakukan di luar sistem elektronik
                Picaso.
              </p>

              <h3>5. Kritik dan/ atau Saran</h3>
              <ol type='a'>
                <li>
                  Dalam hal terdapat pertanyaan, keluhan dan/ atau pengaduan
                  sehubungan dengan penggunaan Picaso, maka Pengguna dan/atau
                  Pelanggan dapat mengajukan pertanyaan, keluhan dan/atau
                  pengaduan dengan melampirkan identitas Pengguna dan/atau
                  Pelanggan ke:
                  <ol type='1'>
                    <li>Secara tertulis melalui: cs@picaso.id</li>
                    <li>
                      Langsung ke alamat lengkap: PT. TELKOM INDONESIA Kebayoran
                      Baru Jl. Sisingamangaraja No.4, RT.2/RW.1, Selong, Kec.
                      Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota
                      Jakarta 12110
                    </li>
                  </ol>
                </li>
                <li>
                  Dalam hal adanya penambahan, pengurangan dan/atau perubahan
                  channel pengaduan akan diinformasikan kemudian melalui website
                  <Link href='/'>https://picaso.id</Link>.
                </li>
                <li>
                  Picaso akan melakukan verifikasi data Pengguna dan/atau
                  Pelanggan dengan berpedoman pada data Pengguna dan/atau
                  Pelanggan yang tersimpan pada sistem Picaso. Picaso berhak
                  melakukan penolakan dalam memproses pertanyaan, keluhan
                  dan/atau pengaduan yang diajukan Pengguna dan/atau Pelanggan
                  dalam hal data Pengguna dan/atau Pelanggan yang diverifikasi
                  tidak sesuai dengan data Pengguna dan/atau Pelanggan yang
                  tersimpan pada sistem Picaso.
                </li>
                <li>
                  Picaso akan melakukan pemeriksaan dan/ atau investigasi atas
                  pengaduan Pengguna dan/atau Pelanggan Picaso serta memberikan
                  jawaban kepada Pengguna dan/atau Pelanggan sesuai dengan
                  kebijakan dan prosedur yang berlaku di Picaso setelah Picaso
                  menerima keluhan/pengaduan secara lengkap dalam kurun waktu 2
                  (dua) minggu.
                </li>
              </ol>

              <h3>6. Hukum yang Berlaku & Penyelesaian Perselisihan</h3>
              <p>
                Syarat dan Ketentuan ini tunduk pada Hukum Negara Republik
                Indonesia, hal-hal yang tidak atau belum diatur dalam Syarat dan
                Ketentuan ini tunduk pada ketentuan hukum yang berlaku bagi
                Perjanjian, termasuk namun tidak hanya terbatas pada Hukum
                Perjanjian yang termuat dalam Buku III, Kitab Undang-Undang
                Hukum Perdata (KUHPerdata).
              </p>
              <ol type='a'>
                <li>
                  Para Pihak sepakat untuk menyelesaikan perselisihan dalam
                  pelaksanaan Kontrak Berlangganan ini secara musyawarah dan
                  mufakat.
                </li>
                <li>
                  Apabila musyawarah dan mufakat tidak tercapai dalam waktu 30
                  (tiga puluh) hari kalender atau suatu jangka waktu lainnya
                  sebagaimana disepakati Para Pihak terhitung sejak timbulnya
                  Perselisihan, maka Para Pihak sepakat bahwa penyelesaian
                  Perselisihan tersebut akan diteruskan ke BANI (Badan Arbitrase
                  Nasional Indonesia) yang bertempat di Jakarta dan menyetujui
                  keputusan BANI tersebut bersifat final, sehingga tidak dapat
                  dimintakan putusan pada tingkat yang lebih tinggi dan mengikat
                  Para Pihak.
                </li>
              </ol>

              <h3>7. Ketentuan Penutup</h3>
              <p>
                Ketentuan ini mulai berlaku pada saat ditetapkan oleh Pihak
                Picaso pada tanggal
              </p>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default Terms;
