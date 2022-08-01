const interaction = () => {

    // Create initial divs
    const title = document.createElement('div');
    title.classList.add('title');

    const status = document.createElement('div');
    status.classList.add('status');

    const center = document.createElement('div');
    center.classList.add('center');

    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.setAttribute('id', 'player')

    const computerBoard = document.createElement('div');
    computerBoard.classList.add('board');
    computerBoard.setAttribute('id', 'computer')

    const footer = document.createElement('div');
    footer.classList.add('footer');

    // DOM elements
    const body = document.body;


    // Initial load up
    const loadUp = () => {
        const titleWords = document.createElement('h1');
        const startButton = document.createElement('button');
        startButton.setAttribute('id', 'mainStart')

        const howTo = document.createElement('p');

        titleWords.innerHTML = 'Battleship';
        startButton.innerHTML = 'Start'
        howTo.innerHTML = "<a href='https://www.hasbro.com/common/instruct/battleship.pdf'>How to Play</a>"


        title.appendChild(titleWords);
        title.appendChild(startButton);
        title.appendChild(howTo)

        body.appendChild(title);
        body.appendChild(foot());
    }

    // Battleship Title at top
    const placement = () => {
        title.innerHTML = '';
        title.style.position = 'relative';
        footer.style.position = 'relative';

        const titleWords = document.createElement('h1');
        titleWords.innerHTML = 'Battleship';

        // Uses computer board div as a temp div for buttons
        const startButton = document.createElement('button');
        startButton.setAttribute('id', 'battleStart')

        title.appendChild(titleWords);
        computerBoard.appendChild(startButton);

        body.appendChild(title);
        body.appendChild(computerBoard);
        body.appendChild(foot());
    }

    // Create footer 
    function foot() {
        footer.innerHTML = '<p>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992"><i class="fa-brands fa-github"></i></a><p>'
        return footer;
    }

    return {loadUp}
}

export default interaction;