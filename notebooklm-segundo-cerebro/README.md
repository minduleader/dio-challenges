# 🧠 Segundo Cérebro: Ecossistema de Mods Vampirism e Werewolves no Minecraft

> **Frase de Tema e Objetivo:** Documentação e repositório do "Segundo Cérebro" focado na Análise Histórica, Técnica e Conceitual do ecossistema de modificação de *Minecraft* desenvolvido pelo coletivo **TeamLapen** (*Vampirism*, *Werewolves* e *FactionAPI*).

---

## 📌 1. Tema e Objetivo

Este repositório documenta a estrutura de conhecimento acumulada e organizada no Gemini Notebook sobre o ecossistema de mods sobrenaturais de *Minecraft* criados pela **TeamLapen** (liderada por **maxanier** e **Cheaterpaul**).

O objetivo principal deste projeto é catalogar e analisar:
- **Origem Histórica e Evolução**: O desenvolvimento desde 2014 por Max Becker (maxanier) até a consolidação da equipe com Paul Becker (Cheaterpaul) [3, 7, 120, 121].
- **Arquitetura de Software e Engenharia**: Uso da linguagem Java, frameworks de compilação (Gradle/ModDevGradle), Mixins e desacoplamento modular via **FactionAPI** e **Vampirism-API** [2, 6, 10, 128, 129].
- **Sistemas de Gameplay Assimétricos**: Mecânicas de infecção por *Sanguinare Vampiris*, sistemas de sangue, ciclo diurno/noturno, rituais, árvores de habilidades e transformação em lobisomem [3, 4, 5, 123, 126, 127].
- **Ecossistema Derivado e Compatibilidade**: Módulos de integração (*VampirismIntegrations*), cálculo dinâmico de entidades por caixa de colisão e addons da comunidade (*TVD Vampirism*, *Godly Vampirism*) [2, 12, 15, 22, 129, 136].

---

## 📚 2. Fontes Selecionadas e Justificativa de Confiabilidade

O notebook foi alimentado com 30 fontes primárias e secundárias criteriosamente selecionadas. A confiabilidade das fontes apoia-se em quatro pilares:

1. **Repositórios Oficiais de Código no GitHub (`TeamLapen/Vampirism`, `TeamLapen/Werewolves`, `TeamLapen/VampirismIntegrations`, `TeamLapen/VampirismWebsite`, `maxanier/GodlyVampirism`)**:
   - *Por que confio:* Representam o código-fonte original, licenças técnicas (LGPLv3) e changelogs diretos mantidos pelos próprios desenvolvedores principais [1, 2, 9, 10, 14, 15].
2. **Wikis Oficiais do Projeto (`wiki.vampirism.dev` e `wiki.werewolves.dev`)**:
   - *Por que confio:* É a documentação de referência oficial mantida pela equipe de desenvolvimento para jogadores e criadores de addons/datapacks [6, 10, 16, 139, 144].
3. **Páginas Oficiais de Publicação (CurseForge e Modrinth)**:
   - *Por que confio:* Plataformas oficiais de distribuição que contêm métricas auditadas de downloads (22.5M+ no Vampirism, 4.7M+ no Werewolves), versões do jogo e requisitos de ambiente [3, 4, 5, 11, 122, 134].
4. **Artigo de Análise Técnica e Conceitual em Markdown ("O Ecossistema de Modificação de Minecraft")**:
   - *Por que confio:* Documento sintético estruturado que cruza histórico, tabelas de módulos e desafios técnicos com citações diretas a todas as fontes primárias [119-138].

---

## 🤖 3. Diretriz de Comportamento Dada ao Notebook

Para garantir a máxima confiabilidade do portfólio do "Segundo Cérebro", a seguinte diretriz rígida de comportamento foi atribuída ao assistente:

> **Diretriz de Fundamentação Estrita:**
> - Responder exclusivamente com base nos fatos contidos e verificáveis nas fontes do notebook.
> - Não utilizar conhecimento prévio externo ou extrapolações não citadas nos documentos.
> - Toda e qualquer afirmação factual DEVE conter uma citação direta ao final da frase/cláusula no formato `[i]`.
> - Em caso de ausência parcial ou total de dados nas fontes sobre determinado tópico, declarar explicitamente o que não foi encontrado sem inventar informações.

---

## ❓ 4. Perguntas Realizadas, Respostas e Fontes Evidenciadas

Abaixo estão registradas perguntas fundamentais feitas ao notebook, demonstrando como ele responde estritamente com base nas fontes e indicando a rastreabilidade de cada afirmação.

### ❓ Pergunta 1: Quem criou os mods Vampirism e Werewolves e em que ano surgiram?
> **💬 Resposta do Notebook:**
> O mod *Vampirism* foi iniciado de forma independente em 2014 pelo desenvolvedor e engenheiro eletricista alemão Max Becker (conhecido como **maxanier**) [3, 7, 8, 120]. Inicialmente publicado no Minecraft Forum e CurseForge para a versão 1.7.10 do jogo, o projeto evoluiu para a organização **TeamLapen** à medida que a base de usuários cresceu [3, 8, 120, 121]. Posteriormente, o desenvolvedor Paul Becker (**Cheaterpaul**) entrou para a equipe como co-mantenedor do *Vampirism* e criou o mod *Werewolves* por volta de 2020 como uma expansão oficial de facções [2, 5, 9, 121, 122].

* **Fontes Utilizadas:**
  - `O Ecossistema de Modificação de Minecraft` [120, 121, 122]
  - `Become a vampire! - Minecraft Mods - CurseForge` [3]
  - `Werewolves - Become a Beast! - Minecraft Mods - CurseForge` [5]
  - `Paul Becker — Minecraft Modder & Java Developer` [2]
  - `Maxanier - Developer, Gamer, Electrical Engineer` [7]

---

### ❓ Pergunta 2: Qual é o papel da FactionAPI na arquitetura dos mods da TeamLapen?
> **💬 Resposta do Notebook:**
> O **FactionAPI** é a camada de código e motor abstrato desenvolvido por Cheaterpaul que gerencia os sistemas de facções, níveis de jogador, níveis de nobreza (*lord levels*), habilidades ativas e passivas, tarefas (*tasks*), refinamentos e vilarejos [4, 6, 129, 139, 140]. O *Vampirism* e o *Werewolves* operam como consumidores dessa API, derivando suas estruturas das interfaces genéricas do FactionAPI (como `IFactionPlayer` e `ISkillPlayer`), o que permite desacoplar a lógica central e facilitar a criação de novos mods de facção por terceiros [6, 129, 140, 144].

* **Fontes Utilizadas:**
  - `Overview - Wiki | Vampirism` [6, 139, 140, 144]
  - `O Ecossistema de Modificação de Minecraft` [129]
  - `Become a vampire! - Minecraft Mods - CurseForge` [4]

---

### ❓ Pergunta 3: Como funciona o cálculo dinâmico de sangue para criaturas de outros mods?
> **💬 Resposta do Notebook:**
> Para garantir compatibilidade com outros mods sem necessidade de configurações manuais prévias, o *Vampirism* possui um algoritmo em tempo de execução que avalia entidades desconhecidas que herdam de `AnimalEntity` [2, 12, 129]. O sistema calcula a quantidade de sangue disponível com base no tamanho da caixa de colisão (*bounding box*) da entidade, exigindo um tamanho mínimo para torná-la mordível e aplicando um limite máximo [2, 195]. Os valores calculados dinamicamente são salvos no arquivo `world/vampirism/dynamic-blood-values.txt` [3, 195].

* **Fontes Utilizadas:**
  - `Bite-able Creatures & Blood Grinder - Wiki | Vampirism` [2, 3]
  - `Become a vampire! - Vampirism-1.12.2-1.4.0-beta.1 - Minecraft Mods - CurseForge` [195]
  - `O Ecossistema de Modificação de Minecraft` [129]

---

### ❓ Pergunta 4: Quais são as vantagens e desvantagens das facções de Vampiro e Lobisomem?
> **💬 Resposta do Notebook:**
> - **Vampiros**: Infectados pelo *Sanguinare Vampiris*, trocam a barra de fome por uma reserva de sangue obtida ao morder animais ou aldeões [3, 4, 11, 123, 177]. Ganham visão noturna, velocidade, teletransporte e transformação em morcego, mas sofrem dano contínuo e letal da luz solar direta [3, 4, 124, 178].
> - **Lobisomens**: Mantêm aparência humana de dia e assumem a forma bestial à noite ou voluntariamente [5, 126]. Possuem alta resistência a danos físicos e garras afiadas, mas só conseguem consumir carne crua e possuem vulnerabilidade severa a armas forjadas em prata [5, 127, 217].

* **Fontes Utilizadas:**
  - `Become a vampire! - Minecraft Mods - CurseForge` [3, 4, 177, 178]
  - `Werewolves - Become a Beast! - Minecraft Mods - CurseForge` [5, 217]
  - `O Ecossistema de Modificação de Minecraft` [123, 124, 126, 127]

---

## 🔗 5. Link do Notebook Compartilhado

- **Link de Acesso ao Gemini Notebook:** `https://notebook.google.com/notebook/59d71296-5321-4568-8615-46f9c4f1d0aa`

---

## 🖼️ 6. Evidências e Materiais Anexados

Os arquivos de evidência de resposta pelas fontes estão organizados nas seguintes pastas do repositório:

- `assets/mapa_mental.png`: Exportação do mapa mental interativo gerado pelo assistente no Gemini Notebook.
- `assets/guia_infografico.png`: Infográfico conceitual do ecossistema e guia do mod.
- `assets/prints_chat/`: Capturas de tela demonstrando as perguntas realizadas e as citações numeradas `[i]` geradas diretamente das fontes.

---

## 🛠️ Checklist de Submissão

- [x] O tema e objetivo estão claramente declarados na introdução.
- [x] Todas as fontes foram listadas com a justificativa de confiabilidade.
- [x] As diretrizes de comportamento do notebook foram detalhadas.
- [x] As respostas contêm citações numéricas explícitas ligadas às fontes do notebook.
- [x] O repositório está público, na conta do usuário, com nome em minúsculas e sem acento (`segundo-cerebro-werewolves`).
