import { useState } from 'react'
import emailjs from 'emailjs-com'
import GitHubIcon from '@material-ui/icons/GitHub';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    console.log(e.target)
    
    const templateParams = {
      from_name: email,
      to_name: name,
      subject: 'Testando',
      message_html: message,
      }
      emailjs.send(
      'service_2xk62pe',
      'template_dhzb08l',
        templateParams,
      'user_u6044hHOMeCXcGF0FtvD6'
      )

    // emailjs
    //   .sendForm(
    //     'service_2xk62pe', 'template_dhzb08l', e.target, 'user_u6044hHOMeCXcGF0FtvD6'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Fale conosco</h2>
                <p>
                  Por favor, preencha o formulário abaixo para nos enviar um email e iremos
                  volte para você o mais rápido possível.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nome Completo'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='exemplo@email.com'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mensagem'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informações de Contato</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Endereço
                </span>
                Av. José de Freitas Queiroz, 5003, Quixadá - CE, 63902-580
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefone
                </span>{' '}
                4002-8922
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                samuelevangelista.ti@gmail.com
                guilhermewillian.ti@gmail.com
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href= 'https://github.com/samueljrz/Software-Engineer' target='_blank'>
                      <GitHubIcon className='iconbutton'/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
