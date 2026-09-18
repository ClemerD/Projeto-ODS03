# Cada Ano Conta — Prevenção da Mortalidade Infantil no Brasil

Projeto acadêmico desenvolvido com foco no **ODS 3 — Saúde e Bem-Estar**, da Organização das Nações Unidas (ONU), abordando a importância da prevenção da mortalidade infantil no Brasil e da atenção à saúde na primeira infância.

O projeto apresenta informações educativas, dados sobre o cenário brasileiro e uma área de inscrição para participação em ações de conscientização.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma página web educativa e informativa sobre a prevenção da mortalidade infantil, destacando a importância de:

* acompanhamento pré-natal;
* assistência adequada durante o parto;
* cuidados com recém-nascidos;
* vacinação;
* acompanhamento do crescimento e desenvolvimento infantil;
* acesso aos serviços de saúde;
* informação e participação da comunidade.

A proposta também demonstra, de forma prática, a utilização de tecnologias web para criar uma solução digital relacionada ao **ODS 3**.

---

## 🌎 ODS 3 — Saúde e Bem-Estar

O **Objetivo de Desenvolvimento Sustentável 3** busca assegurar uma vida saudável e promover o bem-estar para todas as pessoas, em todas as idades.

Dentro desse objetivo, a redução da mortalidade infantil é uma questão importante, pois está diretamente relacionada à qualidade da assistência à gestante, ao parto, ao recém-nascido e à criança.

---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

* **HTML5** — estrutura da página;
* **CSS3** — estilização, layout e responsividade;
* **JavaScript** — interações, validações e animações;
* **Supabase** — banco de dados e armazenamento das inscrições;
* **Git** — controle de versão;
* **GitHub** — hospedagem do código;
* **GitHub Pages** — publicação da página web.

---

## 🗄️ Banco de dados

O projeto utiliza o **Supabase** para armazenar os dados enviados pelo formulário de inscrição.

A tabela utilizada é:

```text
inscricoes
```

### Estrutura

| Campo        | Tipo        | Descrição                        |
| ------------ | ----------- | -------------------------------- |
| `id`         | bigint      | Identificador do cadastro        |
| `nome`       | text        | Nome da pessoa                   |
| `contato`    | text        | Telefone ou contato informado    |
| `perfil`     | text        | Perfil selecionado no formulário |
| `created_at` | timestamptz | Data e horário do cadastro       |

O formulário envia os dados diretamente para o Supabase através da biblioteca JavaScript oficial.

### Segurança

O banco utiliza **Row Level Security (RLS)**.

A configuração atual permite que visitantes realizem **INSERT** de novos registros, mas não permite que usuários públicos consultem, alterem ou excluam os cadastros.

```text
INSERT  → permitido
SELECT  → bloqueado
UPDATE  → bloqueado
DELETE  → bloqueado
```

Os registros podem ser administrados diretamente pelo painel do Supabase.

> A aplicação utiliza apenas uma chave pública do Supabase no frontend. Chaves secretas, como `service_role`, não devem ser utilizadas no código publicado.

---

## 📋 Formulário de inscrição

A página possui um formulário para coleta de informações de pessoas interessadas em participar das ações relacionadas ao projeto.

São coletados:

* Nome;
* Contato;
* Perfil do participante.

Após o envio:

1. O JavaScript valida os campos obrigatórios;
2. Os dados são enviados ao Supabase;
3. O cadastro é armazenado na tabela `inscricoes`;
4. Uma mensagem de confirmação é apresentada ao usuário.

Caso ocorra uma falha na comunicação com o banco, o projeto possui uma alternativa de contato através do WhatsApp.

---

## 📊 Visualização de dados

A página também apresenta informações por meio de elementos visuais, incluindo um gráfico comparativo entre regiões.

As barras do gráfico possuem animação utilizando JavaScript e são carregadas progressivamente quando a página é aberta.

---

## 📁 Estrutura do projeto

```text
Projeto-ODS03/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém a estrutura principal da página, incluindo:

* apresentação do projeto;
* informações sobre o ODS 3;
* dados sobre mortalidade infantil;
* gráfico;
* formulário de inscrição.

### `style.css`

Responsável por:

* cores;
* tipografia;
* espaçamento;
* layout;
* responsividade;
* componentes visuais;
* animações CSS.

### `script.js`

Responsável por:

* validação do formulário;
* integração com o Supabase;
* envio dos cadastros;
* mensagens de sucesso e erro;
* geração do link de WhatsApp;
* animação das barras do gráfico.

### `README.md`

Documentação do projeto e instruções básicas para utilização e desenvolvimento.

---

## 🚀 Como executar o projeto

Como o projeto utiliza HTML, CSS e JavaScript, pode ser executado diretamente em um navegador.

### 1. Clone o repositório

```bash
git clone https://github.com/ClemerD/Projeto-ODS03.git
```

### 2. Entre na pasta

```bash
cd Projeto-ODS03
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em um navegador.

Também é possível utilizar o **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## 🔗 Publicação

O projeto pode ser publicado utilizando o **GitHub Pages**, permitindo que a página seja acessada diretamente pela internet.

O frontend é hospedado pelo GitHub Pages enquanto os dados do formulário são armazenados no Supabase.

### Arquitetura

```text
                 USUÁRIO
                    │
                    ▼
             ┌─────────────┐
             │ GitHub Pages│
             │ HTML/CSS/JS │
             └──────┬──────┘
                    │
                    │ Cadastro
                    ▼
             ┌─────────────┐
             │   Supabase  │
             │ PostgreSQL  │
             └──────┬──────┘
                    │
                    ▼
              Tabela
            inscricoes
```

---

## 🔄 Atualizando o projeto

Após realizar alterações no código:

```bash
git add .
```

Depois:

```bash
git commit -m "Atualiza projeto"
```

E envie para o GitHub:

```bash
git push origin main
```

---

## 📚 Referências

As informações utilizadas no projeto devem ser baseadas em fontes confiáveis relacionadas à saúde pública, desenvolvimento sustentável e indicadores de mortalidade infantil.

Principais referências utilizadas como base:

* Organização das Nações Unidas — Objetivos de Desenvolvimento Sustentável;
* Ministério da Saúde;
* DATASUS;
* Sistema de Informações sobre Mortalidade (SIM);
* Sistema de Informações sobre Nascidos Vivos (SINASC).

---

## 🎓 Finalidade acadêmica

Este projeto foi desenvolvido como atividade acadêmica relacionada ao **ODS 3 — Saúde e Bem-Estar**, utilizando desenvolvimento web como ferramenta para disseminação de informação e conscientização sobre a saúde na primeira infância.

O projeto também tem como finalidade demonstrar conhecimentos práticos em:

* desenvolvimento web;
* JavaScript;
* integração com banco de dados;
* controle de versão;
* GitHub;
* publicação de aplicações web;
* conceitos básicos de segurança de dados.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido para fins acadêmicos.

**Projeto:** Cada Ano Conta
**Tema:** Prevenção da Mortalidade Infantil no Brasil
**ODS:** 3 — Saúde e Bem-Estar
