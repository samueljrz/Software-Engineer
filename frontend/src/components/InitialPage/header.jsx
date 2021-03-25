export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  Sua aprovação está aqui
                  <span></span>
                </h1>
                <p>Somos a melhor e a mais moderna plataforma de questões no mercado, com vários alunos aprovados, venha conquistar sua aprovação também.</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Saiba Mais
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
