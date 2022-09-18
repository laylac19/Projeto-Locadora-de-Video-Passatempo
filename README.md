# Projeto - Gestão de Vídeo Locadora
Aplicação `Angular + Sprint Boot` desenvolvida durante as matérias Desenvolvimento Web II e Gerência de Projetos no 7º Período da faculdade;
- [Video Locadora Análise de Projeto](https://github.com/laylac19/projeto-locadora/blob/main/VideoLocadora_Analise.pdf);
- [Mapeamento de Histórias](https://miro.com/app/board/uXjVOhXA7Oo=/?share_link_id=475121761179);

# Branches - Git Definições
- Develop sempre é usada para atualizar MAIN (pode conter várias histórias);
- Cada Sprint tem a sua branch `develop/Sprint#1`;
- Cada HISTORIA tem sua branch `feature/{nome da historia}`;
- Branches não vinculadas a alguma HISTORIA, ou a mais de uma seguem o padrão `refatoracao/{descricao}`;
- As atualizações de branches sempre vêm da MAIN;
- Reparos de merges incompletos/problemas simples da master geram branches de reparo `hotfix/{descrição}`;
- Defeitos abertos na revisão geram branches de reparo `fix/{descricao}`;
- Branches de hotfix e fix atualizam a master e a develop;
- Defeitos abertos no teste de uma funcionalidade não geram branch, são reparados na branch da HISTORIA respectiva;
- Só é feito o merge da Develop na Master se uma HISTORIA estiver completa e funcionando como esperado;
