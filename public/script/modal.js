export default function Modal(){
  //Criar um costante para melhorar o código.
  const modalWrapper = document.querySelector('.modal-wrapper')

  //Uma ação ao botão cancelar.
  const cancelButton = document.querySelector('.button.cancel')
  //Quando clicar nele sera fechado-close
  cancelButton.addEventListener("click", close)


  function open(){
      //funcionalidade de atribuir a classe active para a model
      modalWrapper.classList.add("active")
  }
  function close(){
      //Funcionalidade de remover a class active da modal
      modalWrapper.classList.remove("active")
  }
      //Retorno de um ciclo até executar ação..
  return{
    open,
    close
  }
}