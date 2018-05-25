const controller = new NegociacaoController();
//Teste
$('.form').submit(controller.adiciona.bind(controller)); /* o bind - para manter a associação do this de adiciona do controller */