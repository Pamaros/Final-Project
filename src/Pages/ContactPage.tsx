import ButtonsGroup from "../Components/ButtonsGroup";
import Card from "../Components/Card";

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form data here
  };

  return (
    <Card>
      <h2>Formulário</h2>

      <form
        className="form flex-column"
        id="contact-form"
        onSubmit={handleSubmit}
        method="get"
      >
        <div className="form--row form--margin-bottom-20 flex-row">
          <div className="form--group flex-column flex-column--left">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form--group flex-column flex-column--left">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
        </div>

        <div className="form--row form--margin-bottom-20 flex-row">
          <div className="form--group flex-column flex-column--left">
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="email@provider.com"
            />
          </div>
          <div className="form--group flex-column flex-column--left">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+351 123456789"
            />
          </div>
        </div>

        <div className="form--margin-bottom-20 form--group flex-column flex-column--left">
          <label htmlFor="subject">Subject</label>
          <select className="" name="subject" id="subject" required>
            <option value="">Select...</option>
            <option value="site-analysis">Site analysis</option>
            <option value="programming">Programming</option>
            <option value="concept-design">Concept design</option>
          </select>
        </div>

        <div className="form--margin-bottom-20 form--group flex-column flex-column--left">
          <label htmlFor="message">Mensagem</label>
          <textarea
            required
            name="message"
            id="message"
            maxLength={400}
            rows={5}
            cols={50}
          />
        </div>

        <input
          className="form--margin-bottom-20"
          type="file"
          id="file"
          name="file"
        />

        <div className="form--row flex-row">
          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <ButtonsGroup home={true} about={true}/>
    </Card>
  );
}

export default ContactPage;
