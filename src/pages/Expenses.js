import React from 'react'

const Expenses = () => {
  return (
    <div>
      <h1 className="h3 mb-3"> Expenses</h1>


      {/* Here is display users  */}



      <div class="card">
        {/* Ahiya Jitu apde navu banavsu
                
                
                ----->>>>>

                Ok Bhai


                <<<<<<-----
                
                
                
                
                */}
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>




      <div className="row">
        <div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic User Expenses</h5>
              <h6 className="card-subtitle text-muted"><strong>Last 7 Day's</strong> Expenses</h6>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Expense Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th >Date of Expense</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vanessa Tucker</td>
                  <td>864-348-0485</td>
                  <td>Food</td>
                  <td className="d-none d-md-table-cell">June 21, 1961</td>
                  <td className="table-action">
                    <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                    <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>William Harris</td>
                  <td>914-939-2458</td>
                  <td>Food</td>
                  <td className="d-none d-md-table-cell">May 15, 1948</td>
                  <td className="table-action">
                    <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                    <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sharon Lessman</td>
                  <td>704-993-5435</td>
                  <td>Food</td>
                  <td className="d-none d-md-table-cell">September 14, 1965</td>
                  <td className="table-action">
                    <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                    <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Christina Mason</td>
                  <td>765-382-8195</td>
                  <td>Fuel</td>
                  <td className="d-none d-md-table-cell">April 2, 1971</td>
                  <td className="table-action">
                    <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                    <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Robin Schneiders</td>
                  <td>202-672-1407</td>
                  <td>Cloths</td>
                  <td className="d-none d-md-table-cell">October 12, 1966</td>
                  <td className="table-action">
                    <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                    <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Expenses
