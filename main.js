class Board{
    constructor(board){
        this.board = board;
        
        this.panelBtn = this.board.querySelector('.panel-btns');
        this.panelBtnOpen = this.board.querySelector('.panel-btn-open');
        this.panelBtnHide = this.board.querySelector('.panel-btn-hide');
        this.panelContent = this.board.querySelector('.tm-content');
        this.panelBtn.addEventListener('click', ()=>this.togglePanel());
    }
//method
    togglePanel(){
            
        this.panelBtnOpen.classList.toggle('hide-btn');
        this.panelBtnHide.classList.toggle('hide-btn');
        this.panelContent.classList.toggle('toggle-on');
    }
}





let boards = document.querySelectorAll('.board');
boards = Array.from(boards);
boards.forEach(function(board){
    return new Board(board);
})


