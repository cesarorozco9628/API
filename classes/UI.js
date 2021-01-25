export default class UI {
    static printCategories(categories) {
        const container = document.getElementById('categories');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        });
    }
    static printQuestions(questions) {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';
        if(questions[0].type === "multiple") {
            questions.forEach((question) => {
                container.innerHTML += `<div class="col-md-4 mt-4">
                                            <div class="card h-100 bg-dark shadow-card">
                                                <div class="card-body">
                                                <label required="required">${question.question}</label>
                                                    
                                                        <div name="respuestas" class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="" id="${question.incorrect_answers[0]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[0]}">
                                                        ${question.incorrect_answers[0]}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="" id="${question.correct_answer}">
                                                        <label class="form-check-label" for="${question.correct_answer}">
                                                        ${question.correct_answer}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="" id="${question.incorrect_answers[2]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[2]}">
                                                        ${question.incorrect_answers[2]}
                                                        </label>
                                                        </div>
                                                        <div class="form-check">
                                                        <input required="required" class="form-check-input" name="${question.question}" type="radio" value="" id="${question.incorrect_answers[1]}">
                                                        <label class="form-check-label" for="${question.incorrect_answers[1]}">
                                                        ${question.incorrect_answers[1]}
                                                        </label>
                                                        </div>
                                                    
                                                
                                                </div>   
                                                </div>
                                            </div>
                                        </div>`;
            })
        }
        else {
            questions.forEach((question) => {
                container.innerHTML += `<div class="col-md-4 mt-4">
                                            <div class="card h-100 bg-dark shadow-card"> 
                                                <div class="card-body" >
                                                    <label>${question.question}</label>
                                                            <div class="form-check">
                                                                <input required="required" class="form-check-input" name="${question.question}" type="radio" id="${question.incorrect_answers[0]}">
                                                                <label class="form-check-label" for="${question.incorrect_answers[0]}">
                                                                        ${question.incorrect_answers[0]}
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input required="required" class="form-check-input" name="${question.question}" type="radio" id="${question.correct_answer}">
                                                                <label class="form-check-label" for="${question.correct_answer}">
                                                                        ${question.correct_answer}
                                                                </label>
                                                            </div>   
                                                </div>
                                            </div>
                                        </div>`;
            })
         };
         

        
    }

    static GetAnswers(quest) {
        const allAnswer =  this.printQuestions; 
        let LaRespuesta = document.querySelectorAll(".form-check-input:checked");
        let print = document.getElementById('print');
        let count =0;
        for(let i =0; i< LaRespuesta.length; i++){
            for(let j =0; j < allAnswer.length ; j++){
                if(LaRespuesta[i] === allAnswer[j]){
                    count += 1;
                }
            }
        }
        print.innerHTML = `<div class="col-md-4 text-color">
                              <p>Las respuestas correctas son: ${count}</p>
                           </div>`;
    }
    
}
