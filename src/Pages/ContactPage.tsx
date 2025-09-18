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
        id="myform"
        onSubmit={handleSubmit}
        method="get"
      >
        <div className="form--row flex-row">
          <div className="form--group flex-column flex-column--left">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form--group flex-column flex-column--left">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
        </div>

        <div className="form--row flex-row">
          <div className="form--group flex-column flex-column--left">
            <label htmlFor="email">E-mail</label>
            <input
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

        <div className="form--group flex-column flex-column--left">
          <label htmlFor="district">Subject</label>
          <select className="" name="district" id="district" required>
            <option value="">Selecione...</option>
            <option value="lisboa">Lisboa</option>
            <option value="porto">Porto</option>
            <option value="braga">Braga</option>
          </select>
        </div>

        <div className="form--group flex-column flex-column--left">
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            maxLength={200}
            rows={5}
            cols={50}
          />
        </div>

        
        <input type="file" id="file" name="file" />

        <div>
          <input type="reset" value="Limpar" />
          <input type="submit" value="Submeter" />
        </div>
      </form>
    </Card>
  );
}

export default ContactPage;
