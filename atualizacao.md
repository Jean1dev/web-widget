# Recomendações de Atualização de Dependências

Este documento apresenta a análise de dependências do projeto **binno-web-widget** e as devidas recomendações de atualização para garantir segurança, desempenho e modernização do código com o menor risco possível de quebras.

---

## 1. Visão Geral

As dependências do projeto estão divididas em duas frentes de atualização:
1. **Atualizações Seguras (Minor & Patch)**: Atualizações que respeitam as restrições semânticas (SemVer) atualmente configuradas no `package.json` (usando o prefixo `^`). Elas contêm correções de bugs e melhorias sem alterações nas APIs públicas.
2. **Atualizações Majoritárias (Major)**: Grandes saltos de versão que contêm mudanças disruptivas (*breaking changes*) e exigem atenção redobrada, testes manuais adicionais e possíveis ajustes no código fonte do widget.

---

## 2. Diagnóstico de Dependências Desatualizadas

Abaixo está o mapeamento detalhado obtido a partir do registro do NPM:

### Dependências de Produção (`dependencies`)

| Pacote | Versão Instalada | Versão Desejada (SemVer) | Última Versão | Tipo de Atualização | Impacto e Recomendações |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `react` | `18.1.0` | `18.3.1` | `19.2.7` | Patch / Major | Seguro atualizar para `18.3.1`. Migração para `19.x` é de alto impacto. |
| `react-dom` | `18.1.0` | `18.3.1` | `19.2.7` | Patch / Major | Deve acompanhar a mesma versão do pacote `react`. |
| `@headlessui/react` | `1.6.1` | `1.7.19` | `2.2.10` | Minor / Major | Seguro atualizar para `1.7.19`. Versões `2.x` exigem React 18+ ou 19 e alteram comportamento de transições. |
| `axios` | `0.27.2` | `0.27.2` | `1.18.1` | Major | Seguro na versão atual. A migração para `1.x` altera tipagens TypeScript e respostas de erro. |

*Nota: Os pacotes `html2canvas` (`1.4.1`) e `phosphor-react` (`1.4.1`) já estão em suas versões mais recentes possíveis.*

### Dependências de Desenvolvimento (`devDependencies`)

| Pacote | Versão Instalada | Versão Desejada (SemVer) | Última Versão | Tipo de Atualização | Impacto e Recomendações |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `typescript` | `4.6.4` | `4.9.5` | `6.0.3` | Minor / Major | Seguro atualizar até `4.9.5`. Atualizar para v5/v6 requer revisões na sintaxe de tipos do compilador. |
| `vite` | `2.9.6` | `2.9.18` | `8.1.0` | Minor / Major | Seguro atualizar até `2.9.18`. O salto para v8 requer reconfiguração dos plugins e migração obrigatória para ESM. |
| `@vitejs/plugin-react` | `1.3.1` | `1.3.2` | `6.0.3` | Patch / Major | Deve acompanhar a versão correspondente do Vite. |
| `vite-plugin-dts` | `1.1.1` | `1.7.3` | `5.0.2` | Minor / Major | Utilizado para gerar os arquivos de declaração `.d.ts`. Acompanha a versão do Vite. |
| `tailwindcss` | `3.0.24` | `3.4.19` | `4.3.1` | Minor / Major | Seguro atualizar até `3.4.19`. A v4 é uma reescrita CSS-first disruptiva (remove `tailwind.config.js`). |
| `@tailwindcss/forms` | `0.5.0` | `0.5.11` | `0.5.11` | Minor | Baixo risco. Atualizar para v0.5.11 traz compatibilidade aprimorada com Tailwind v3.4. |
| `postcss` | `8.4.13` | `8.5.15` | `8.5.15` | Minor | Baixo risco. Atualização recomendada de segurança e performance. |
| `autoprefixer` | `10.4.6` | `10.5.1` | `10.5.1` | Minor | Baixo risco. Mantém a compatibilidade com navegadores atualizada. |
| `@types/react` | `18.0.8` | `18.3.31` | `19.2.17` | Minor / Major | Atualizar para `18.3.31` para sincronizar com a tipagem do React 18.3. |
| `@types/react-dom` | `18.0.3` | `18.3.7` | `19.2.3` | Minor / Major | Atualizar para `18.3.7` para sincronizar com a tipagem do React-DOM 18.3. |

---

## 3. Roteiro de Atualização Recomendado

Sugerimos que as atualizações sejam feitas de forma incremental e segura, divididas em etapas lógicas.

### Fase 1: Atualizações Seguras (Risco Zero / Sem Quebras)

Esta fase atualiza os pacotes para as versões mais recentes permitidas pelas regras SemVer do seu arquivo `package.json` atual.

1. **Executar a atualização automática das faixas seguras:**
   ```bash
   npm update
   ```
   *Isso elevará automaticamente dependências fundamentais como React para `18.3.1`, Tailwind para `3.4.19`, TypeScript para `4.9.5` e Vite para `2.9.18`.*

2. **Validar a compilação do projeto:**
   Execute o build para certificar-se de que nada quebrou nas definições de compilação:
   ```bash
   npm run build
   ```

---

### Fase 2: Modernização das Ferramentas de Build (Recomendado)

Se a Fase 1 for bem-sucedida, recomendamos atualizar o ecossistema de desenvolvimento (Vite, TypeScript, Tailwind CSS) para versões LTS (Long Term Support) modernas de alta performance (como Vite v5 e TypeScript v5), que dão suporte robusto ao React 18.

Execute o comando abaixo para instalar as versões recomendadas estáveis do ecossistema:

```bash
# Atualizar TypeScript e tipagens do React 18
npm install -D typescript@^5.4.5 @types/react@^18.3.12 @types/react-dom@^18.3.1

# Atualizar Vite (v5) e plugins compatíveis
npm install -D vite@^5.2.11 @vitejs/plugin-react@^5.0.1 vite-plugin-dts@^3.9.1

# Atualizar Tailwind v3 para a versão mais estável e rápida (3.4.x)
npm install -D tailwindcss@^3.4.3 postcss@^8.4.38 autoprefixer@^10.4.19 @tailwindcss/forms@^0.5.7
```

**Verificação:**
Remova a pasta de build anterior e execute um novo build para garantir a estabilidade do compilador:
```bash
rm -rf dist && npm run build
```

---

### Fase 3: Transição para Últimas Versões (React 19, Tailwind v4, Vite v8)

Estas atualizações representam grandes saltos tecnológicos. Recomenda-se realizar cada uma delas em ramificações (*branches*) de desenvolvimento dedicadas, isolando os testes:

#### 1. Migração para Axios v1
Atualize o axios para desfrutar de melhorias de tipagem e de performance:
```bash
npm install axios@latest
```
*Atenção:* Revise se há interceptores ou tratamentos de erro que utilizavam propriedades de erro depreciadas nas versões `0.x`.

#### 2. Migração para Vite v8 e TypeScript v6
```bash
npm install -D vite@latest @vitejs/plugin-react@latest vite-plugin-dts@latest typescript@latest
```
*Atenção:* O Vite v8 exige que o projeto seja configurado estritamente como ESM (módulos ES), o que pode exigir ajustes na extensão dos arquivos de configuração ou adição de `"type": "module"` no `package.json`.

#### 3. Migração para React 19 & React-DOM 19
O React 19 simplifica o uso de referências (`ref` como prop normal), adiciona suporte nativo a Actions, mas remove APIs legadas e exige atualizações em bibliotecas de UI integradas:
```bash
npm install react@latest react-dom@latest
npm install -D @types/react@latest @types/react-dom@latest
```
*Atenção:* Após atualizar, certifique-se de que o pacote `@headlessui/react` foi atualizado para a versão `2.x` (necessária para total compatibilidade com React 19).

#### 4. Migração para Tailwind CSS v4
O Tailwind v4 é incrivelmente rápido e dispensa arquivos de configuração de JS pesados. No entanto, sua estrutura de migração exige a adoção de novas diretivas CSS em `global.css`. Recomendamos realizar essa migração apenas após a estabilização do Vite e React nas versões mais recentes.

---

## 4. Próximos Passos Recomendados

1. Crie uma nova branch local (`git checkout -b chore/update-dependencies`).
2. Aplique a **Fase 1** executando `npm update` e valide se a aplicação compila corretamente com `npm run build`.
3. Caso queira modernizar as ferramentas de build com segurança, siga os comandos da **Fase 2**.
4. Teste o widget no navegador (`npm run dev`) para garantir que todas as interações continuem plenamente funcionais.
