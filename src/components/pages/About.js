function About() {
  return (
    <div id="about" className="container section p-4">
        <p class="p-text text-light m-5">
                    Wassup! My name is
                    I'yana Medlock and I am a 20-year-old
                    student who is majoring in computer science. I dabble in
                    HTML,
                    Javascript,
                    Java,
                    a bit of python,
                    a smidge of C! I reside in Houston,
                    Texas, where I attend San Jac Community college and Rice
                    University Coding Bootcamp. I enjoy creating things such as
                    websites,
                    Chrome extensions, and
                    Electron apps. I plan to become an
                    official web-developer then obtaining my bachelor's in computer
                    science.
                </p>
      <h3 className="text-light border-bottom border-light">Skills </h3>
      
      <div className="row container d-flex row-cols-2 mx-auto p-3 w-100">
        <span className="skill p-3 text-light">
          <p>
            <i class="fab fa-html5 px-2"></i> HTML 5
          </p>
        </span>
        <span className="skill p-3 text-light">
          <p>
            <i class="fab fa-css3 px-2"></i> CSS 3
          </p>
        </span>
        <span className="skill p-3 text-light">
          <p>
            <i class="fab fa-bootstrap px-2"></i> Bootstrap
          </p>
        </span>
        <span className="skill p-3 text-light">
          <p>
            <i class="fab fa-js px-2"></i> JavaScript
          </p>
        </span>
        <span className="skill p-3 text-light">
          <p>
            <i class="fab fa-react px-2"></i> React
          </p>
        </span>
        <span className="skill p-3 text-light">
          <p>
            <i class="fas fa-database px-2"></i> MySQL
          </p>
        </span>
      </div>
    </div>
  );
}

export default About;
