
let tarefa = document.getElementById('tarefa')
let botaoAdicionar = document.getElementById('botao-adicionar')
let listaTarefas = document.getElementById('lista-tarefas')

botaoAdicionar.addEventListener('click', function(){

    // Validando o campo de texto, se estiver com conteúdo, se não cai no "alert". 
    if(tarefa && tarefa.value.trim() !== ''){

        // Criando meu elemento "li" na lista de tarefas.
        let li = document.createElement('li');
        li.textContent = tarefa.value;

        // Criando o botão remover tarefa.
        let botaoRemover = document.createElement('button');

        // Anexando a classe ao meu botão para estilizar.
        botaoRemover.classList.add('btnStyle')

        // Criando aparência do botão
        botaoRemover.textContent = 'remover';

        
        // Adicionando o botão remover ao li
        li.appendChild(botaoRemover);

        // Adicionando o "li" a lista de tarefas, anexando o filho ao "ol".
        listaTarefas.appendChild(li);

        // Limpando o input após adicionar a tarefa;
        tarefa.value = '';

        
        // Foi criado a classe "concluida" no css, e adicionamos aqui abaixo com toggle
        li.addEventListener('click', function(){
            li.classList.toggle('concluida');
        })

        //Removendo a tarefa no caso o "li".
        //// (esse evento abaixo e para apenas impedir que o clique “suba” para os elementos pais no DOM.) este comando -> event.stopPropagation();
        botaoRemover.addEventListener('click', (event) =>{
            event.stopPropagation();

        //Removendo o "li".
        // E não precisa passar o container como argumento, por que o <li> "sabe" que é o filho.
            li.remove();
        })

    }else{
        alert("Seu campo está vazio, digite uma tarefa")
    };

})
