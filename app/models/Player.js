
export class Player {
  constructor(name) {
    this.name = name;
    // The score is defaulted to start at 0
    this.score = 0;
  }

  get PlayerTemplateCard() {
    console.log("Accessing template card.")
    return /*html*/`
    <div class="card">
        <div class="card-body">
            <button onclick="app.PlayersController.scorePoint('${this.name}')" class="btn btn-danger" type="button">Score!</button>
            ${this.name} - ${this.score}
        </div>
    </div>`
  }
}