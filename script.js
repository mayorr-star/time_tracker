const activities = document.querySelector(".activities");
const daily = document.querySelector(".daily");
const monthly = document.querySelector(".monthly");
const weekly = document.querySelector(".weekly");

async function loadData() {
  //Extracting the data from the local json file(json.data)
  let response = await fetch("./data.json");
  let jsonData = await response.json();

  let dataItem = "";
  for (let i = 0; i < jsonData.length; i++) {
    dataItem = `
          <div class="category-box">
            <div class="work-style"><img src="./images/icon-work.svg" alt="icon-work" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[0].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[0].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[0].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="play-style"><img src="./images/icon-play.svg" alt="icon-play" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[1].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[1].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[1].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="study-style"><img src="./images/icon-study.svg" alt="icon-study" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[2].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[2].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[2].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="exercise-style"><img src="./images/icon-exercise.svg" alt="icon-exercise"></div>
            <div class="category">
              <span class="activity">${jsonData[3].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[3].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[3].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="social-style"><img src="./images/icon-social.svg" alt="icon-social"></div>
            <div class="category">
              <span class="activity">${jsonData[4].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[4].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[5].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="self-care-style"><img src="./images/icon-self-care.svg" alt="icon-self-care" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[5].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[5].timeframes.weekly.current}hrs</span>
              <span class="previous-time">Last week - ${jsonData[5].timeframes.weekly.previous}hrs</span>
            </div>
          </div>
          `;
  }
  activities.innerHTML = dataItem;
}

async function loadSecondData() {
  //Extracting the data from the local json file(json.data)
  let response = await fetch("./data.json");
  let jsonData = await response.json();

  let dataItem = "";
  for (let i = 0; i < jsonData.length; i++) {
    dataItem = `
          <div class="category-box">
            <div class="work-style"><img src="./images/icon-work.svg" alt="icon-work" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[0].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[0].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[0].timeframes.daily.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="play-style"><img src="./images/icon-play.svg" alt="icon-play" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[1].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[1].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[1].timeframes.daily.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="study-style"><img src="./images/icon-study.svg" alt="icon-study" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[2].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[2].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[2].timeframes.daily.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="exercise-style"><img src="./images/icon-exercise.svg" alt="icon-exercise"></div>
            <div class="category">
              <span class="activity">${jsonData[3].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[3].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[3].timeframes.daily.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="social-style"><img src="./images/icon-social.svg" alt="icon-social"></div>
            <div class="category">
              <span class="activity">${jsonData[4].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[4].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[5].timeframes.daily.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="self-care-style"><img src="./images/icon-self-care.svg" alt="icon-self-care" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[5].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[5].timeframes.daily.current}hrs</span>
              <span class="previous-time">Yersteday - ${jsonData[5].timeframes.daily.previous}hrs</span>
            </div>
          </div>
        </div>
      `;
  }
  activities.innerHTML = dataItem;
}

async function loadThirdData() {
  //Extracting the data from the local json file(json.data)
  let response = await fetch("./data.json");
  let jsonData = await response.json();

  let dataItem = "";
  for (let i = 0; i < jsonData.length; i++) {
    dataItem = `
          <div class="category-box">
            <div class="work-style"><img src="./images/icon-work.svg" alt="icon-work" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[0].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[0].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[0].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="play-style"><img src="./images/icon-play.svg" alt="icon-play" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[1].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[1].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[1].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="study-style"><img src="./images/icon-study.svg" alt="icon-study" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[2].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[2].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[2].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="exercise-style"><img src="./images/icon-exercise.svg" alt="icon-exercise"></div>
            <div class="category">
              <span class="activity">${jsonData[3].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[3].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[3].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="social-style"><img src="./images/icon-social.svg" alt="icon-social"></div>
            <div class="category">
              <span class="activity">${jsonData[4].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[4].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[5].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
          <div class="category-box">
            <div class="self-care-style"><img src="./images/icon-self-care.svg" alt="icon-self-care" class="image"></div>
            <div class="category">
              <span class="activity">${jsonData[5].title}</span>
              <button><img src="./images/icon-ellipsis.svg" alt="icon-ellipsis"></button>
              <span class="time-spent">${jsonData[5].timeframes.monthly.current}hrs</span>
              <span class="previous-time">Last month - ${jsonData[5].timeframes.monthly.previous}hrs</span>
            </div>
          </div>
        </div>
      `;
  }
  activities.innerHTML = dataItem;
}

//Displaying the page when the window loads
window.addEventListener("onload", loadData());
weekly.addEventListener('click', loadData);

//Displaying daily times when I click on daily
daily.addEventListener('click', loadSecondData);

//Displaying monthly times when I click on monthly
monthly.addEventListener('click', loadThirdData);
