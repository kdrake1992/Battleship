const interaction = () => {
    let shipNum = 0;
    let ready = false;

    // Create initial divs
    const title = document.createElement('div');
    title.classList.add('title');

    const status = document.createElement('div');
    status.classList.add('status');

    const center = document.createElement('div');
    center.classList.add('center');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    // DOM elements
    const body = document.body;

    // Initial load up
    const loadUp = (player1, player2) => {
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

        // Initial start button
        const start = document.getElementById('mainStart');
        start.addEventListener('click', e => {
            placement(player1, player2);

            // Once placement is done, move to game
            const battleStart = document.getElementById('battleStart');
            battleStart.addEventListener('click', e => {
                if(ready === true) {
                    fadePlacement();
                    setTimeout(() => {
                        gameInteraction(player1, player2);
                    }, 1500)

                }
            })
        })

        
    }

    // Changes ship placement from horizontal and veritcal
    const direction = () => {
        const directionButton = document.getElementById('direction');
        directionButton.addEventListener('click', e => {
            if(directionButton.innerHTML === 'Horizontal') {
                directionButton.innerHTML = 'Vertical';
            }
            else {
                directionButton.innerHTML = 'Horizontal';
            }
        })
    }

    // Creates the player and enemy 10x10 board
    const boardMaker = (type) => {
        const boards = document.createElement('div')

        let playerBoard = boardGenerator();
        let computerBoard = boardGenerator();

        if(type === 'game') {
            boards.classList.add('gameBoards');
            playerBoard.setAttribute('id', 'player');
            computerBoard.setAttribute('id', 'computer');
            
            const top = document.createElement('div');
            const bot = document.createElement('div');

            const topText = document.createElement('p');
            const botText = document.createElement('p');
            topText.setAttribute('id', 'computerWords');
            botText.setAttribute('id', 'playerWords');

            topText.innerHTML = 'Enemy';
            botText.innerHTML = 'Player';


            top.appendChild(topText);
            top.appendChild(computerBoard);
            bot.appendChild(botText);
            bot.appendChild(playerBoard);

            boards.appendChild(top);
            boards.appendChild(bot);

            return boards
        }

        else {
            boards.classList.add('boards');
            boards.appendChild(playerBoard)
            return boards;
        }
    }

    // Board generator 
    const boardGenerator = () => {
        let board = document.createElement('div');
        board.classList.add('board');

        for(let i = 0; i < (10*10); i++) {
            let square = document.createElement('div') 
            square.classList.add('square');
            square.setAttribute('id', i);
            board.appendChild(square);
        }

        return board;
    }

    // Board reader Fix this
    const boardReader = (type, player, htmlBoard, enemy, loc) => {
        if(type === 'start') {
            let counter = 0;
            for(let i = 0; i <= 9; i++) {
                for(let j = 0; j <= 9; j++) {
                    if(type === 'start') {
                        if(player.board.board[i][j] !== '') {
                            htmlBoard[counter].style.backgroundColor = 'green'
                        }
                        else {
                            htmlBoard[counter].style.backgroundColor = 'none'       
                        }
                    }
                    counter++;
                }
            }
        }
        else if(type === 'attack') {
            if(player.getName() === 'Player1') {
                let pos = position(loc);
                let x = pos[0];
                let y = pos[1];
    
                const status = document.getElementById('status')
                if(player.attack(y, x, enemy.board) === 'hit') {
                    htmlBoard.childNodes[loc].style.backgroundColor = 'red';
                    statusEdit(player, 'hit');
                }
                else {
                    htmlBoard.childNodes[loc].style.backgroundColor = 'dodgerblue';
                    statusEdit(player, 'miss');
                }
            }
            else if(player.getName() === 'Player2') {
                let attack = player.attack(0, 0, enemy.board);
                const hit = () => {
                    let pos = player.getCompMove();
                    pos = aGrid(pos);
                    htmlBoard.childNodes[pos].style.backgroundColor = 'red';
                    statusEdit(player, 'hit');
                }
                const miss = () => {
                    let pos = player.getCompMove();
                    pos = aGrid(pos);
                    htmlBoard.childNodes[pos].style.backgroundColor = 'dodgerblue';
                    statusEdit(player, 'miss')
                }

                const doubleHit = () => {
                    let attack = player.attack(0, 0, enemy.board)
                    if(attack === 'hit') {
                        hit();
                    }
    
                    else if(attack === 'miss') {
                        miss();
                    }
                    else if(attack === 'doubleHit') {
                        doubleHit();
                    }
                }
                if(attack === 'hit') {
                    hit();;
                }

                else if(attack === 'miss') {
                    miss();
                }

                else if(attack === 'doubleHit') {
                    doubleHit();
                }
            }

        }
    }

    const statusEdit = (player, type) => {
        const mess = document.getElementById('status');
        let currentPlayer = '';
        if (player.getName() === 'Player1') {
            currentPlayer = 'You'
        }
        else {
            currentPlayer = 'Enemy'
        }

        if(type === 'hit') {
            if(currentPlayer === 'You') {
                mess.innerHTML = `<p>${currentPlayer} got'em! Good job!</p>` ;
            }
            else {
                mess.innerHTML = `<p>${currentPlayer} scored a hit!</p>` ;
            }

        }
        else if (type === 'miss') {
            if(currentPlayer === 'You') {
                mess.innerHTML = `<p>${currentPlayer} missed.. bummer..</p>`;
            }
            else {
                mess.innerHTML = `<p>${currentPlayer} missed.. safe..</p>` ;
            }

        }
        else if(type === 'sunk') {
            if(currentPlayer === 'You') {
                mess.innerHTML = `<p>${currentPlayer} sunk their ship!!</p>` ;

            }
            else {
                mess.innerHTML = `<p>${currentPlayer} sunk your ship!</p>`
                
            }
        }
        else if(type === 'game') {
            if(currentPlayer === 'You') {
                mess.innerHTML = `<p>${currentPlayer} won the battle!</p>`
            }
            else {
                mess.innerHTML = `<p>You lost the battle...` ;
            }

        }

    }

    // Array to grid
    const aGrid = (location) => {
        let loc = -11; 
        for(let i = 0; i <= location[1]; i++) {
            loc+= 10;
        }
        for(let j = 0; j <= location[0]; j++) {
            loc++;
        }
        return loc;
    }

    // Grid to array position
    const position = (location) => {
        let pXY = [];
        let x = 0;
        let y = 0;

        // Gets x axis
        if(location <= 9) {
            x = 0;
        }
        else if(location >= 10 && location <=19) {
            x = 1;
        }
        else if(location >= 20 && location <=29) {
            x = 2;
        }
        else if(location >= 30 && location <=39) {
            x = 3;
        }
        else if(location >= 40 && location <=49) {
            x = 4;
        }
        else if(location >= 50 && location <=59) {
            x = 5;
        }
        else if(location >= 60 && location <=69) {
            x = 6;
        }
        else if(location >= 70 && location <=79) {
            x = 7;
        }
        else if(location >= 80 && location <=89) {
            x = 8;
        }
        else if(location >= 90 && location <=99) {
            x = 9;
        }
        
        // Gets the last digit of the location
        if(location.length === 1) {
            location = location[0];
        }
        else {
            location = location[1];
        }

        // Gets y axis
        if(location == 0) {
            y = 0;
        }
        else if(location == 1) {
            y = 1;
        }
        else if(location == 2) {
            y = 2;
        }
        else if(location == 3) {
            y = 3;
        }
        else if(location == 4) {
            y = 4;
        }
        else if(location == 5) {
            y = 5;
        }
        else if(location == 6) {
            y = 6;
        }
        else if(location == 7) {
            y = 7;
        }
        else if(location == 8) {
            y = 8;
        }
        else if(location == 9) {
            y = 9;
        }

        pXY.push(x);
        pXY.push(y);
        return pXY;
    }


    // Battleship Title at top
    const placement = (player1) => {
        title.innerHTML = '';
        title.style.position = 'relative';
        title.style.padding = '7px';
        title.style.marginTop = '10px';
        footer.style.position = 'relative';

        const titleWords = document.createElement('h1');
        titleWords.innerHTML = 'Battleship';

        // Horizontal/Vertical button
        const directionButton = document.createElement('button');
        directionButton.setAttribute('id', 'direction')
        directionButton.innerHTML = 'Horizontal'

        // Create the player board
        const board = boardMaker();

        // Start battle button
        const startButton = document.createElement('button');
        startButton.setAttribute('id', 'battleStart')
        startButton.innerHTML = 'Start Battle'

        title.appendChild(titleWords);

        body.appendChild(title);
        body.appendChild(directionButton);
        body.appendChild(board)
        body.appendChild(startButton);
        body.appendChild(foot());

        // Sets direction
        direction();

        // Hover over effect
        let playerSquare = document.querySelectorAll('.square');
        let x = 0;
        let y = 0;

        // Remove event listeners
        const removeEvents = (obj) => {
            obj.removeEventListener('mouseout', mouseout)
            obj.removeEventListener('mouseover', mouseover)
            obj.removeEventListener('click', click)
        }

        // Function to check the code
        const checkHover = (e, type) => {
            let loc = position(e.id);

            if(player1.board.checkPlacement(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase())) {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            if(i === 0) {
                                player1.board.placeShip(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase());
                            }
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos)
                            if(i + 1 == player1.board.ships[shipNum].getLength()) {
                                shipNum++;
                                break;
                            }
                        }

                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        let nextPos = document.getElementById(next);
                        if(type === 'mouseover') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'lightgreen';
                        }
                        else if(type === 'mouseout') {
                            if(nextPos.style.backgroundColor == 'green') {
                                break;
                            }
                            nextPos.style.backgroundColor = 'transparent';
                        }
                        else if(type === 'click') {
                            if(i === 0) {
                                player1.board.placeShip(player1.board.ships[shipNum], loc[1], loc[0], directionButton.innerHTML.toLowerCase());
                            }
                            nextPos.style.backgroundColor = 'green';
                            removeEvents(nextPos);
                            if(i + 1 == player1.board.ships[shipNum].getLength()) {
                                shipNum++;
                                break;
                            }
                        }
                    }
                }
            }
            else {
                if(directionButton.innerHTML.toLowerCase() == 'horizontal') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + i;
                        if((next % 10 === 0)) {
                            break;
                        }
                        else {
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
                else if(directionButton.innerHTML.toLowerCase() == 'vertical') {
                    for(let i = 0; i < player1.board.ships[shipNum].getLength(); i++) {
                        let next = parseInt(e.id) + (10 * i);
                        if(next > 99) {
                            break;
                        }
                        else{
                            let nextPos = document.getElementById(next);
                            if(type === 'mouseover') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'red';
                            }
                            if(type === 'mouseout') {
                                if(nextPos.style.backgroundColor == 'green') {
                                    break;
                                }
                                nextPos.style.backgroundColor = 'transparent';
                            }
                        }
                    }
                }
            }

            // Removes event listeners once finish
            if(shipNum === 5) {
                playerSquare.forEach(e => {
                    removeEvents(e);
                })
                ready = true;
            }

        }
        // Function handler
        const mouseover = function(e) {
            checkHover(e.target, 'mouseover');
        }
        const mouseout = function(e) {
            checkHover(e.target, 'mouseout');
        }
        const click = function(e) {
            checkHover(e.target, 'click');
        }

        // Listeners for check hover
        playerSquare.forEach(e => {
            e.addEventListener('mouseover', mouseover);
        })
        playerSquare.forEach(e => {
            e.addEventListener('mouseout', mouseout);
        })
        playerSquare.forEach(e => {
            e.addEventListener('click', click)
        })
    }

    // Fade out placement screen
    const fadePlacement = () => {
        // Fade out and remove screens
        const directionButton = document.getElementById('direction');
        const startButton = document.getElementById('battleStart');
        const placementBoard = document.querySelector('.boards');
        const footer = document.querySelector('.footer');
        
        title.setAttribute('id', 'fadeOut');
        directionButton.setAttribute('id', 'fadeOut');
        startButton.setAttribute('id', 'fadeOut');
        placementBoard.setAttribute('id', 'fadeOut');
        footer.setAttribute('id', 'fadeOut');

        setTimeout(() => {
            title.remove();
            directionButton.remove();
            startButton.remove();
            placementBoard.remove()
            footer.remove();
        }, 1500)
    }

    // Game interaction
    const gameInteraction = (player1, player2) => {
        // Add the 2 new boards and status
        const status = document.createElement('div');
        let game = boardMaker('game');

        // Align the divs

        body.appendChild(foot());
        body.insertBefore(game, footer);
        body.insertBefore(status, game);


        // Fade in
        console.log(footer)
        footer.removeAttribute('id')
        body.setAttribute('id', 'fadeIn');

        // Let the games begin
        status.setAttribute('id', 'status');
        status.innerHTML = '<p>Let the battle begin!</p>'

        let player = document.querySelector('#player')
        boardReader('start', player1, player.childNodes);

        // Function handler for interaction
        const mouseover = function(e) {
            e.target.style.backgroundColor = 'lightgreen'
        }
        const mouseout = function(e) {
            e.target.style.backgroundColor = 'transparent'
        } 
        const click = function(e) {
            if(player1.getTurn()) {
                if(!player2.board.gameOver()) {
                    boardReader('attack', player1, computer, player2, e.target.id);
                    removeEvents(e.target);
                    player2.board.ships.forEach(e => {
                        if(e.isSunk() === true) {
                            if(e.getSunkStatus() === false) {
                                e.setSunkStatus()
                                statusEdit(player1, 'sunk');
                                if(player2.board.gameOver()) {
                                    statusEdit(player1, 'game');
                                    player1.setTurn();
                                    computer.childNodes.forEach(e => {
                                        removeEvents(e);
                                    })
                                    player2.setTurn();
                                }
                            }
                        }
                    });
                    player1.setTurn();
                    player2.setTurn();

                    setTimeout(() =>  {
                        if(player2.getTurn()) {
                            if(!player1.board.gameOver()) {
                                boardReader('attack', player2, player, player1, e.target.id);
                                player1.board.ships.forEach(e => {
                                    if(e.isSunk() === true) {
                                        if(e.getSunkStatus() === false) {
                                            e.setSunkStatus()
                                            statusEdit(player2, 'sunk');
                                            if(player1.board.gameOver()) {
                                                statusEdit(player2, 'game');
                                                computer.childNodes.forEach(e => {
                                                    removeEvents(e);
                                                })
                                                player2.setTurn();
                                            }
                                        }
                                    }
                                });
                            }
                        }
                        player1.setTurn();
                        player2.setTurn();
                    }, 2500);

                }
            }
        }

        // Remove event listeners
        const removeEvents = (obj) => {
            obj.removeEventListener('mouseout', mouseout)
            obj.removeEventListener('mouseover', mouseover)
            obj.removeEventListener('click', click)
        }

        let computer = document.querySelector('#computer')
        computer.childNodes.forEach(e => {
            e.addEventListener('mouseover', mouseover);
            e.addEventListener('mouseout', mouseout);
            e.addEventListener('click', click);
        });
    }

    // Create footer 
    function foot() {
        footer.innerHTML = '<p>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992"><i class="fa-brands fa-github"></i></a><p>'
        return footer;
    }

    return {loadUp}
}

export default interaction;