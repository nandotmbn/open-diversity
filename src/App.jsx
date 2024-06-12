
function App() {
  return (
    <div>
      <section className="h-screen w-screen bg-gradient-to-r from-primary to-secondary flex flex-col justify-between">
        <header className="p-8 flex flex-row">
          <div className="flex-1">
            <img alt="logo" src="/open-diversity/logo.png" className="w-full" />
          </div>
          <div className="flex-1 md:flex-2 lg:flex-3"></div>
        </header>
        <div className="flex flex-col m-auto w-9/12 md:w-11/12 lg:w-9/12 gap-8 md:flex-row-reverse">
          <div className="md:flex-1 lg:flex-1">
            <img alt="logo" src="/open-diversity/neuron.png" className="w-9/12 md:w-full m-auto" />
          </div>
          <div className="w-full flex flex-col items-center md:flex-1 md:items-start">
            <h2 className="text-2xl lg:text-4xl font-semibold text-white">Pahami potensi indonesia</h2>
            <p className="text-center text-white md:text-left">Dukung dan amankan akses pertama ke 1 GB (12.000+) dataset keberagaman Indonesia yang telah melalui quality control.</p>
            <div className="mt-8 flex flex-row gap-2">
              <button className="rounded-lg shadow bg-white text-primary px-4 py-1 text-sm">
                Deposit Sekarang
              </button>
              <button className="rounded-lg shadow bg-secondary text-white px-4 py-1 text-sm">
                Coba AI versi 1.0
              </button>
            </div>
          </div>
        </div>
        <div className="m-auto w-11/12 bg-white py-2 rounded-full flex flex-row justify-center items-center text-center">
          <p><strong>#1 Non-profit open source AI dan dataset</strong> keberagaman Indonesia berbasis kawasan</p>
        </div>
      </section>
      <section className="py-2 text-center text-white w-screen bg-gradient-to-r from-primary to-secondary flex flex-col justify-center items-center mt-2">
        <p className="w-11/12 md:w-10/12 lg:w-8/12"><strong>Visi OpenDiversity: </strong> menjaga dan memanfaatkan kekayaan keberagaman Indonesia melalui teknologi sumber terbuka untuk mencapai keamanan dan keberlanjutan sumber daya manusia yang bermartabat</p>
      </section>
      <section className="py-2 text-center text-white w-screen flex flex-row justify-center items-center mt-8 gap-2">
        <div className="rounded-lg shadow-lg min-h-44 w-24 md:w-32 flex flex-col gap-2 p-2 md:p-4 items-center justify-between">
          <img src="/open-diversity" alt="test" className="rounded-full h-20 w-20 shadow-lg" />
          <p className="text-primary font-semibold underline text-sm">Anies Baswedan</p>
        </div>
        <div className="rounded-lg shadow-lg min-h-44 w-24 md:w-32 flex flex-col gap-2 p-2 md:p-4 items-center justify-between">
          <img src="/open-diversity" alt="test" className="rounded-full h-20 w-20 shadow-lg" />
          <p className="text-primary font-semibold underline text-sm">Gita Wirjawan</p>
        </div>
        <div className="rounded-lg shadow-lg min-h-44 w-24 md:w-32 flex flex-col gap-2 p-2 md:p-4 items-center justify-between">
          <img src="/open-diversity" alt="test" className="rounded-full h-20 w-20 shadow-lg" />
          <p className="text-primary font-semibold underline text-sm">Maudy Ayunda</p>
        </div>
      </section>
      <section className="m-auto w-11/12 md:w-9/12 lg:w-6/12 text-center mt-4">
        <p className="italic text-sm">“OpenDiversity adalah ikhtiar dan peluang masa depan yang wajib didukung untuk membantu Indonesia maju lebih pesat dan adil!”</p>
        <p className="font-bold">Anies Rasyid Baswedan, Tokoh Pendidikan</p>
      </section>
      <section className="m-auto w-11/12 md:w-9/12 lg:w-6/12 text-center mt-4">
        <p className="italic text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">juga <span className="text-xl md:text-4xl">100+</span> peneliti, pelajar, wirausahawan, dan berbagai elemen masyarakat lainnya telah mendukung OpenDiversity.</p>
        <p className="font-bold underline text-gray-400">Beri dukungan</p>
      </section>
      <section className="m-auto w-11/12 md:w-9/12 lg:w-6/12 text-center mt-4">
        <p className="italic text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Jumlah dataset terkumpul</p>
      </section>
      <section className="m-auto w-11/12 md:w-9/12 lg:w-6/12 text-center mt-4">
        <p className="italic text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"><span className="text-xl md:text-4xl">1000+</span> dataset</p>
        <p className="italic text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">dari paper, jurnal, transkrip podcast dan lainnya.</p>
      </section>
      <section className="m-auto w-11/12 md:w-9/12 lg:w-6/12 text-center mt-12">
        <p className="italic text-lg md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Top Leaderboard Kontributor</p>
        <div className="flex flex-col gap-2">
          {
            ["Nadindra Wikrama", "Erlangga", "Hakim Ihsan"].map((name, i) => {
              return <div key={name} className="bg-gradient-to-r from-primary to-secondary p-4 text-white font-semibold">
                #{i + 1} {name}
              </div>
            })
          }
        </div>
        <p className="font-bold underline text-gray-400">Jadi Kontributor</p>
      </section>
      <section className="py-2 w-screen bg-gradient-to-r from-primary to-secondary flex flex-col justify-between">
        <p className="text-center text-white">©2024 OpenDiversity, All Rights Reserved.</p>
      </section>

    </div>
  );
}

export default App;
