import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                <div className='divicon'>
                  <a href= 'https://github.com/samueljrz' target='_blank'>
                        <GitHubIcon className='icongit'/>
                  </a>
                  <a href= 'https://www.linkedin.com/in/samuel-juniorz/' target='_blank'>
                        <LinkedInIcon className='iconlink' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div key="1" className='col-md-3 col-sm-6 team'>
            <div className='thumbnail'>
              {' '}
              <img src="https://avatars.githubusercontent.com/u/37377587?v=4" alt='...' className='team-img' />
              <div className='caption'>
                <h4>Guilherme Willian</h4>
                <p>Full Stack Developer & <br/> Designer</p>
                <div className='divicon'>
                  <a href= 'https://github.com/willsaraiva' target='_blank'>
                        <GitHubIcon className='icongit'/>
                  </a>
                  <a href= 'https://www.linkedin.com/in/guilherme-willian-saraiva-da-hora-373b40200/' target='_blank'>
                        <LinkedInIcon className='iconlink' />
                  </a>
                </div>
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
                <div className='divicon'>
                  <a href= 'https://github.com/vjuniorr' target='_blank' style={{marginTop:"20px"}}>
                        <GitHubIcon className='icongit'/>
                  </a>
                  <a href= 'https://www.linkedin.com/in/valdemi-junior-5814011b8/' target='_blank' style={{marginTop:"20px"}}>
                        <LinkedInIcon className='iconlink' />
                  </a>
                </div>
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
                <div className='divicon'>
                  <a href= 'https://github.com/jeronimojrqxd' target='_blank' style={{marginTop:"20px"}}>
                        <GitHubIcon className='icongit'/>
                  </a>
                  <a href= 'https://www.linkedin.com/in/francisco-jer%C3%B4nimo-354375174/' target='_blank'  style={{marginTop:"20px"}}>
                        <LinkedInIcon className='iconlink' />
                  </a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
