import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Funcionalidades</h2>
        </div>
        <div className='row'>
            <div key="0" className='col-xs-6 col-md-3'>
              {' '}
              <ReceiptIcon className='iconeq' />
              <h3>Questões</h3>
              <p>Contará com cerca de <strong>10.000</strong> questões</p>
            </div>
            <div key="1" className='col-xs-6 col-md-3'>
                  {' '}
                  <MenuBookIcon className='iconeq' />
                  <h3>Caderno de Questão</h3>
                  <p>Crie seus cadernos de questões para estudar</p>
                </div>
            <div key="2" className='col-xs-6 col-md-3'>
                  {' '}
                  <LibraryBooksIcon className='iconeq' />
                  <h3>Simulado</h3>
                  <p>Crie simulados e chegue preparado para a prova</p>
                </div>
            <div key="3" className='col-xs-6 col-md-3'>
                  {' '}
                  <EqualizerIcon className='iconeq' />
                  <h3>Estátisca</h3>
                  <p>Acompanhe   o seu progresso na realização de questões</p>
                </div>
        </div>
      </div>
    </div>
  )
}