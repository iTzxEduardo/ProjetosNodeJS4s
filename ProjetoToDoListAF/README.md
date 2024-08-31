# Escopo do Projeto

## 1. Escopo Funcional

### 1.1. Tela de Login e Registro
- **Login:**
  - **Funcionalidade:** Usuários podem fazer login com e-mail e senha.
  - **Validação:** Verificação de credenciais e mensagens de erro.
  - **Recuperação de Senha:** Opção para recuperação de senha via e-mail.

- **Registro:**
  - **Funcionalidade:** Usuários podem criar uma conta com e-mail, senha e confirmação de senha.
  - **Validação:** Verificação de e-mail válido e confirmação de senha.
  - **Confirmação:** Envio de e-mail de confirmação após registro.

### 1.2. Tela Principal
- **Listagem de Tarefas:**
  - **Funcionalidade:** Exibição de todas as tarefas com informações básicas (título, descrição, status).
  - **Paginação:** Divisão de tarefas em páginas para melhorar a navegação.

- **Adicionar Tarefa:**
  - **Funcionalidade:** Formulário para criar novas tarefas com campos para título, descrição e data de vencimento.
  - **Validação:** Campos obrigatórios e validação de formato de data.

- **Editar Tarefa:**
  - **Funcionalidade:** Modificação de tarefas existentes com atualização de título, descrição e data de vencimento.
  - **Histórico de Alterações:** Registro das mudanças realizadas nas tarefas.

- **Excluir Tarefa:**
  - **Funcionalidade:** Remoção de tarefas com confirmação para evitar exclusões acidentais.
  - **Recuperação:** Possibilidade de restaurar tarefas excluídas dentro de um período definido.

- **Marcar como Concluída:**
  - **Funcionalidade:** Alterar o status da tarefa para "concluída" e exibir uma marca visual.

- **Filtragem e Ordenação:**
  - **Funcionalidade:** Filtrar tarefas por status, data de vencimento e prioridade.
  - **Ordenação:** Ordenar tarefas por data de vencimento, prioridade ou data de criação.

### 1.3. Autenticação e Autorização
- **Proteção de Rotas:**
  - **Funcionalidade:** Restringir acesso a páginas específicas apenas para usuários autenticados.

- **Token JWT:**
  - **Funcionalidade:** Uso de JSON Web Tokens para autenticação e gerenciamento de sessão.
  - **Expiração:** Tokens expiram após um período definido e usuários devem reautenticar-se.

## 2. Escopo Não Funcional

### 2.1. Segurança
- **Criptografia de Senhas:**
  - **Funcionalidade:** Hashing de senhas com `bcrypt` para segurança.
  
- **Proteção de API:**
  - **Funcionalidade:** Middleware para autenticação e autorização com JWT.
  - **Proteção contra Ataques:** Implementação de medidas contra injeção SQL, XSS e CSRF.

### 2.2. Desempenho
- **Tempo de Resposta:**
  - **Objetivo:** Respostas da interface devem ocorrer em menos de 1 segundo.
  - **Objetivo:** Respostas da API devem ocorrer em menos de 2 segundos.

- **Escalabilidade:**
  - **Objetivo:** Arquitetura deve suportar aumento no número de usuários e tarefas.

### 2.3. Usabilidade
- **Design Responsivo:**
  - **Objetivo:** Interface deve ser otimizada para dispositivos móveis e desktops.
  
- **Experiência do Usuário:**
  - **Objetivo:** Interface intuitiva com navegação fácil e clara.
  - **Feedback:** Coletar feedback de usuários para melhorar a experiência.

### 2.4. Manutenção
- **Documentação:**
  - **Objetivo:** Documentar código, API e procedimentos para desenvolvedores e usuários.
  
- **Código Limpo:**
  - **Objetivo:** Código bem estruturado e comentado conforme boas práticas.

## 3. Objetivos SMART

- **Específico:** Desenvolver uma aplicação de To-Do List com funcionalidades completas de gerenciamento de tarefas e autenticação.
- **Mensurável:** A aplicação deve incluir CRUD completo para tarefas e autenticação segura, com a participação de pelo menos 50 usuários para feedback.
- **Atingível:** Utilizar tecnologias como React, Node.js, MongoDB e JWT, com equipe dedicada e recursos alocados adequadamente.
- **Relevante:** Atender às necessidades da Escola SENAI para uma ferramenta eficiente de gerenciamento de tarefas para seus colaboradores.
- **Temporal:** Concluir todas as fases do projeto, desde o planejamento até o deploy, em um período de 12 meses.

## 4. Cronograma - Diagrama de Gantt

```markdown
| Mês | Atividade                                       |
|-----|-------------------------------------------------|
| 1   | Planejamento e Design                          |
| 2   | Configuração do Ambiente e Preparação Inicial   |
| 3-4 | Desenvolvimento do Frontend                     |
| 5-6 | Desenvolvimento do Backend                      |
| 7   | Integração Frontend e Backend                   |
| 8   | Testes de Funcionalidade e Segurança            |
| 9   | Documentação e Preparação para Deploy           |
| 10  | Deploy e Monitoramento Inicial                  |
| 11  | Revisão e Ajustes Finais                        |
| 12  | Avaliação Final, Treinamento e Entrega do Projeto |

## 5. Análise de Risco

### 5.1. Atraso no Desenvolvimento
- **Descrição:** Atrasos devido a problemas técnicos ou mudanças nos requisitos.
- **Mitigação:** Estabelecer marcos mensais, fazer revisões regulares e manter comunicação constante com a equipe.

### 5.2. Problemas de Segurança
- **Descrição:** Vulnerabilidades que podem comprometer dados dos usuários.
- **Mitigação:** Implementar medidas de segurança rigorosas e realizar testes de segurança periódicos.

### 5.3. Escalabilidade
- **Descrição:** Dificuldades em escalar a aplicação para suportar mais usuários.
- **Mitigação:** Projetar arquitetura com escalabilidade em mente e realizar testes de carga.

### 5.4. Problemas de Usabilidade
- **Descrição:** A interface pode não ser intuitiva para todos os usuários.
- **Mitigação:** Realizar testes de usabilidade e ajustar a interface com base no feedback.

## 6. Recursos

### 6.1. Recursos Humanos
- **Desenvolvedores Frontend:** 2
- **Desenvolvedores Backend:** 2
- **Designer UI/UX:** 1
- **Testador:** 1
- **Gerente de Projeto:** 1

### 6.2. Recursos Técnicos
- **Hardware:** Computadores para desenvolvimento e dispositivos móveis para testes.
- **Software:** IDEs, ferramentas de design, ferramentas de gerenciamento de projeto.
- **Serviços:** Hospedagem para frontend e backend, ferramentas de monitoramento e análise.
