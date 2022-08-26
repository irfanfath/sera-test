import type { NextPage, GetServerSideProps } from "next";
import Site from "components/layouts/site";

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

const Disclaimer: NextPage<ILogin> = ({ isLogin }) => {
  const seo = {
    title: "Disclaimer",
    description: "Face recognition e-kyc",
    url: "https://www.picaso.id/forgot-password/",
    keywords: "Face Technology e-kyc",
  };

  return (
    <Site seo={seo} isLogin={isLogin}>
      <section className='page'>
        <div className='container'>
          <div className='card'>
            <div className='page__content'>
              <h1>Picaso e-KYC Disclaimer</h1>
              <h2>Kebijakan Privasi (Disclaimer) untuk Picaso.id</h2>
              <p>
                Jika Anda memerlukan informasi lebih lanjut atau memiliki
                pertanyaan lain tentang kebijakan privasi pada Picaso.id,
                silahkan menghubungi saya via e-mail di info@Picaso.id.
              </p>
              <p>
                Pada Picaso.id, privasi para pengunjung website ini sangat
                penting. Dokumen ini mengurai jenis informasi pribadi yang
                diterima dan dikumpulkan oleh Picaso.id dan bagaimana informasi
                pribadi tersebut digunakan.
              </p>
              <p>
                Dengan mengakses picaso.id ini Anda dianggap telah mengerti dan
                menyetujui seluruh syarat dan kondisi (disclaimer) yang berlaku
                dalam penggunaan website ini, sebagaimana tercantum dibawah ini
                :
              </p>
              <ol>
                <li>
                  Website ini dibuat untuk Sebagai portal/ product picaso e-KYC;
                </li>
                <li>
                  Pada setiap konten terdapat tanggal, bulan & tahun penulisan.
                  Informasi yang tersedia di website ini mohon digunakan untuk
                  rujukan atau referensi saja. konten dibuat berdasarkan apa
                  yang ketahui pada tanggal, bulan & tahun penulisan. tidak
                  menjamin semua informasi yang disajikan akurat dan lengkap
                  sehingga saya tidak bertanggung jawab atas segala kesalahan
                  dan keterlambatan memperbarui informasi, atau segala kerugian
                  yang timbul karena tindakan yang berkaitan dengan penggunaan
                  informasi yang ada pada blog ini, saya sangat berterimakasih
                  jika ada pembaca yang bersedia memberitahukan
                </li>
                <li>
                  Di website ini terdapat beberapa link menuju situs lain yang
                  saya maksudkan untuk melengkapi informasi yang saya tulis pada
                  saat tanggal penulisan dan pada saat itu masih relevan. Oleh
                  karena itu saya tidak bertanggung jawab atas isi atau
                  perubahan pada konten situs yang saya tautkan;
                </li>
                <li>
                  Setiap pembaca website ini diperbolehkan untuk catatan
                  komentar yang dituliskan adalah tanggung jawab dari pemberi
                  komentar masing-masing;
                </li>
                <li>
                  Tulisan maupun tulisan pada website ini merupakan hasil
                  research team Video analitic dan bukan mencotek dari situs
                  lain.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
};

export default Disclaimer;
