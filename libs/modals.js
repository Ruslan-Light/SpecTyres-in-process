const modals = () => {
    function modal(trigger, modal, close){
        trigger.addEventListener('click', function(event){
            if(event.target){
                event.preventDefault();
            }
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        close.addEventListener('click', function(event){
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', function(event){
            let overlay = document.querySelector('.overlay_modal');
            if(event.target === overlay){
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    const callBack = document.querySelector('.header_row__btn'),
        modalWindow = document.querySelector('.callBack_button'),
        closeModal = document.querySelector('.callBack_button #close');

    modal(callBack, modalWindow, closeModal);
};

