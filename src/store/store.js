import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        steps: [
            {
                id: 1,
                type: 'video',
                content: 'https://ucarecdn.com/4c783eba-9110-4df1-930f-7071a0bfd1b9/188779_360_b1caacbcacb31fff90506cd8a7270e99.mp4'
            }, 
            {
              id: 2,
              type: 'audio',
              content: 'https://anchor.fm/s/1e9ae408/podcast/play/31695063/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-3-18%2F176944047-44100-2-556c558f7f4dc.m4a'
          }, 
            {
                id: 3,
                type: 'text',
                content: 
                `## Конспект урока \n
---
#### Функция действительной переменной

**Переменные** подобны константам, но вы можете изменить их значения в любой момент.

    let age = 21;
    age = 22;         // now age is 22
    age = age + 10;   // now age is 32

**Циклы** — это повторяющиеся блоки кода. Цикл **while** — это блок, повторяющийся пока какое-то состояние истинно.
    
    while (condition) {
    do_stuff;
    }

Вот факториал функции с циклом while:

    const factorial = (n) => {
    let counter = 1;
    let result  = 1;
    while (counter <= n) {
    result = result * counter;
    counter = counter + 1;
    }
    return result;
    }

**Идея**: сделать counter = 1, затем умножать result на counter повторно, пока идёт отсчёт до n (число, передаваемое функции). Когда counter станет больше, чем n — остановиться. К тому моменту result будет ответом.
Это **итерация** — сформулированное повторение кода. Разные языки по-разному выполняют итерацию. Цикл while — это один из способов, который предлагает JavaScript.
Декларативное vs. императивное программирование


Сравните рекурсивный факториал и нерекурсивный факториал:

      const recursiveFactorial = (n) => {
      if (n === 1) {
      return 1;
      }
      return n * recursiveFactorial(n-1);
      }

      const factorial = (n) => {
      let counter = 1;
      let result  = 1;

      while (counter <= n) {
      result = result * counter;
      counter = counter + 1;
      }

    return result;
}

Эта рекурсивная функция — декларативная — она как бы определение (трактование, характеристика) факториала. Она декларирует, что такое факториал.
Эта нерекурсивная итеративная функция — императивная — описание того, что нужно делать, чтобы найти факториал.
Слово декларативный происходит от латинского "clarare" — разъяснять, заявлять, делать объявление. Вы разъясняете: я хочу, чтобы факториал n был n раз факториалом n-1.
Слово императивный происходит от латинского "imperare", что значит "командовать". Вы приказываете чётко передвигаться по шагам — умножать это на это, пока идёт отсчёт и запоминаются какие-то числа.

Декларативное — это что. Императивное — это как.
Писать декларативный код, в целом, лучший выбор. Ваш код будет легче читать, понимать, и делать что-то новое опираясь на него. Но иногда у вас нет выбора.
От изменения состояния* появляется гора багов, а инструкции (операторы) присванивания (assignment statements), которые создают изменения, часто являются коренными причинами всего зла во вселенной.
Поэтому, когда дело доходит до инструкций присваивания, действуйте осторожно.

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
**How are you**`
             
            },
            {
                id: 4,
                type: 'question',
                content: 'Дано уравнение $x^2 + px + 7 = 0$, $x_{1}$ и $x_{2}$ - его корни. Найти $p$ , если $x_{1} - x_{2} = 2\\sqrt{2}$ , а корни положительны.',
                answer: '-6'
            },
            {
              id: 5,
              type: 'question',
              content: 'Полный коробок с 70 спичками весит столько же, сколько и 4 коробка с 10 спичками. Сколько пустых коробков весят так же как полный коробок?',
              answer: '8'
          },
          {
            id: 6,
            type: 'question',
            content: 'Семен хочет приблизительно оценить ширину озера. Он ставит пять столбиков возле озера и измеряет расстояния, показанные на рисунке. Чему в метрах равна ширина озера от точки P до точки Q?',
            answer: '200',
            img: 'https://aplusclick.org/image/jpg/1117.jpg'

        },
        {
          id: 7,
          type: 'question',
          content: 'Североамериканский номер телефона службы спасения -911. Сколько трехзначных чисел больше, чем любое двухзначное целое число на 911?' ,
          answer: '79'
      },
      {
        id: 8,
        type: 'text',
        content: 
        `### Спасибо за внимание! Буду рада обратной связи! Отличного дня! `
       
    },
        ]
      }},

      getters: {
        getStepById: (state) => (id) => {
          return state.steps.find(step => step.id === id)
        },
        allSteps (state) {
          return state.steps
        },
        countSteps (state, selectors) {
          return selectors.allSteps.length
        },
        countSuccessSteps (state, selectors) {
          return selectors.allSteps.filter(step => step.success === true).length
        },
        countSuccessQuestions(state) {
          return state.steps.filter(s => s.type === 'question' && s.success === true).length
        },
        

      },

    mutations: {
      SET_SUCCESS(state, id) {
          state.steps.find(step => step.id === id).success = true
      },
      SET_UNSUCCESS(state, id) {
          state.steps.find(step => step.id === id).success = false
      },
    },


    actions: {
      setSuccess({ commit }, id) {
        commit('SET_SUCCESS', id)
      },
      setUnsuccess({ commit }, id) {
        commit('SET_UNSUCCESS', id)
      },
    }
  }
)
  export default store