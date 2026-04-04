import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2 className="section-title">Hubungi Saya</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Mari Bekerja Sama</h3>
            <p>
              Saya selalu terbuka untuk mendiskusikan pekerjaan proyek baru, ide kreatif, 
              atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya melalui formulir ini.
            </p>
            <div className="contact-details">
              <p>📍 Alamat: Jl. Pendidikan No. 1, Jakarta</p>
              <p>📧 Email: siswa.rpl@example.com</p>
              <p>📞 Telp: +62 812 3456 7890</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" id="name" placeholder="Masukkan nama Anda" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email@contoh.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" placeholder="Tulis pesan Anda di sini..." required></textarea>
            </div>
            <button type="submit" className="btn contact-btn">Kirim Pesan</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Portofolio Siswa RPL. Dibuat dengan React.js untuk Praktikum Kelas XI.</p>
      </footer>
    </>
  );
};

export default Contact;
