//Function to generate team HTML
const generateTeam = () => {

    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Team Generator</title>
      </head>
      <body>
        <!--header--->
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <!--header end-->
        <!--Employee Cards-->
        <div class="container">
          <div class="row">
            <!--Manager Card-->
            <div class="col-sm justify-content-center">
              <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                  <h3>${manager.getName()}</h3>
                  <h4>${manager.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-item">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
            </div>
            <!--Engineer Card-->
            <div class="col-sm justify-content-center">
              <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                  <h3>${engineer.getName()}</h3>
                  <h4>${engineer.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-item">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">Office number: ${engineer.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
            </div>
            <!--Intern Card-->
            <div class="col-sm justify-content-center">
              <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary">
                  <h3>${intern.getName()}</h3>
                  <h4>${intern.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-item">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">Office number: ${intern.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
};

module.exports = generateTeam;