export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Encontre o time</h2>
          <p>
            Alunos da Universidade Federal do Ceará
          </p>
        </div>
        <div id='row'>
          <div key="0" className='col-md-3 col-sm-6 team'>
            <div className='thumbnail'>
              {' '}
              <img src="https://avatars.githubusercontent.com/u/37130241?v=4" alt='...' className='team-img' />
              <div className='caption'>
                <h4>Samuel Evangelista</h4>
                <p>Full Stack Developer & <br/> Product Owner</p>
              </div>
            </div>
          </div>
          <div key="1" className='col-md-3 col-sm-6 team'>
            <div className='thumbnail'>
              {' '}
              <img src="https://avatars.githubusercontent.com/u/37377587?v=4" alt='...' className='team-img' />
              <div className='caption'>
                <h4>Guilherme Willian</h4>
                <p>Full Stack Developer & <br/> Designer </p>
              </div>
            </div>
          </div>
          <div key="2" className='col-md-3 col-sm-6 team'>
            <div className='thumbnail'>
              {' '}
              <img src="https://avatars.githubusercontent.com/u/47836518?v=4" alt='...' className='team-img' />
              <div className='caption'>
                <h4>Francisco Valdemir</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
          <div key="3" className='col-md-3 col-sm-6 team'>
            <div className='thumbnail'>
              {' '}
              <img src="https://avatars.githubusercontent.com/u/55724422?v=4" alt='...' className='team-img' />
              <div className='caption'>
                <h4>Francisco Jerônimo</h4>
                <p>Tester</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
