# Estrutura de Estilos - Feira de Profissões

Este diretório contém todos os estilos organizados por seções para facilitar a manutenção e desenvolvimento.

## 📁 Estrutura de Arquivos

```
styles/
├── main.scss              # Arquivo principal que importa todos os estilos
├── _global.scss           # Variáveis, mixins e estilos globais
├── _header.scss           # Header e navegação
├── _hero.scss             # Seção hero (TL-inicial)
├── _instituto.scss        # Seção sobre o instituto
├── _historia.scss         # Seção história
├── _programacao.scss      # Carrossel de programação
├── _cursos.scss           # Seção de cursos
├── _estrutura.scss        # Seção estrutura
├── _participar.scss       # Seção "Por que Participar"
├── _depoimentos.scss      # Carrossel de depoimentos
├── _momentos.scss         # Galeria de fotos
├── _como-chegar.scss      # Mapa e formulário
├── _footer.scss           # Rodapé
└── README.md              # Esta documentação
```

## 🎨 Variáveis Globais

Definidas em `_global.scss`:

- `$primary-color`: #295596 (Azul principal)
- `$secondary-color`: #1A2876 (Azul escuro)
- `$accent-color`: #E05A2B (Laranja)
- `$text-dark`: #1b3b70 (Texto escuro)
- `$text-light`: #444 (Texto claro)
- `$white`: #fff (Branco)
- `$shadow-light/medium/dark`: Sombras em diferentes intensidades

## 🔧 Mixins Disponíveis

- `@mixin flex-center`: Centraliza elementos
- `@mixin flex-between`: Distribui elementos com space-between
- `@mixin card-hover`: Efeito hover para cards
- `@mixin button-hover`: Efeito hover para botões
- `@mixin responsive($breakpoint)`: Media queries responsivas

## 📱 Breakpoints

- `tablet`: max-width: 768px
- `mobile`: max-width: 480px

## 🚀 Como Usar

1. **Para adicionar novos estilos**: Crie um novo arquivo `_secao.scss` e importe no `main.scss`
2. **Para modificar estilos existentes**: Edite o arquivo da seção correspondente
3. **Para estilos globais**: Use `_global.scss`
4. **Para variáveis**: Defina em `_global.scss` e use em qualquer arquivo

## 📋 Seções Identificadas

1. **Header** - Navegação, logo e botão administrativo
2. **Hero** - Seção principal com título e botões de ação
3. **Instituto** - Informações sobre a instituição
4. **História** - Seção com história e imagem do Frei Xavier
5. **Programação** - Carrossel com programação por local
6. **Cursos** - Cards dos cursos oferecidos
7. **Estrutura** - Informações sobre a infraestrutura
8. **Participar** - Motivos para participar da feira
9. **Depoimentos** - Carrossel de depoimentos de ex-alunos
10. **Momentos** - Galeria de fotos da feira anterior
11. **Como Chegar** - Mapa, informações e formulário
12. **Footer** - Rodapé com informações de contato

## 💡 Benefícios da Organização

- ✅ **Manutenibilidade**: Cada seção tem seu próprio arquivo
- ✅ **Reutilização**: Mixins e variáveis globais
- ✅ **Responsividade**: Media queries padronizadas
- ✅ **Performance**: Imports organizados
- ✅ **Escalabilidade**: Fácil adição de novas seções
