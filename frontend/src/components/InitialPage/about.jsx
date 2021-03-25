export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about1.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Sobre nós</h2>
              <p>Temos a missão de aprovar o maior número de pessoas em todos os concursos públicos no Brasil. Com a plataforma mais moderna, organizada e acessível do mercado, prezamos pela a experiência do nosso cliente e um dos nossos valores é disponibilizar a melhor aplicação do mercado. Hoje temos mais de <strong>1000</strong> clientes na nossa plataforma, em 2 anos, pretendemos aumentar esses clientes para uma quantidade de <strong>10000</strong> clientes.</p>
              <h3>Por que nós escolher?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    <strong>Plataforma</strong>
                    <li key="0">Moderna</li>
                    <li key="1">Organizada</li>
                    <li key="2">Acessível</li>
                    <li key="3">Design amigável</li>
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    <strong>Funcionalidades</strong>
                      <li key="0">Criar simulados</li>
                      <li key="1">Criar caderno de <br/> questões</li>
                      <li key="2">Estatísticas de <br/> desempenho </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
