import GlobalMagazine1 from '../Global_list/GlobalMagazine1';
import GlobalMagazine2 from '../Global_list/GlobalMagazine2';
import GlobalMagazine3 from '../Global_list/GlobalMagazine3';

function Magazine(){
  return(
    <>
    <h1 className='d-flex justify-content-center'>Revista</h1>
    <div className="row d-flex justify-content-evenly">
  <div className="col-sm-3 mb-3 mb-sm-3">
    <div className="card">
      <div className="card-body shadow p-3 mb-5 bg-body-tertiary rounded">
        <GlobalMagazine1 />
        <a href="https://heyzine.com/flip-book/ed38c14a9a.html" target="_blanc" className="btn btn-primary d-flex justify-content-center bg-success p-2 text-dark bg-opacity-10">Abrir</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body shadow p-3 mb-5 bg-body-tertiary rounded">
        <GlobalMagazine2 />
        <a href="https://heyzine.com/flip-book/32d60287eb.html" target="_blanc" className="btn btn-primary d-flex justify-content-center bg-success p-2 text-dark bg-opacity-10 ">Ler agora</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body shadow p-3 mb-5 bg-body-tertiary rounded">
        <GlobalMagazine3 />
         <a href="https://heyzine.com/flip-book/23d14e043b.html" target="_blanc" className="btn btn-primary d-flex justify-content-center bg-success p-2 text-dark bg-opacity-10 ">Visualizar</a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default Magazine;