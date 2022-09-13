
# Projeto DrivenPass 

Gerenciador de senhas


## Documentação da API

#### Cadastra usuário

```http
  POST /signup
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.|
| `password`       | `string`|  **Obrigatório**. Id do funcionário|


#### login do usuário (retorna Token)

```http
  POST /signin
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.|
| `password`       | `string`|  **Obrigatório**. Id do funcionário|



#### Cria credencial

```http
  POST /credentials
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. Token do usuario logado |
|`title `     |`string`| **Obrigatório**`deve possuir valor único`|
|`url`|`string`|**Obrigatório**|
|`user_name`|`string`|**Obrigatório**`Nome do usuario`|
|`url`|`string`|**Obrigatório**|
|`password`|`string`|**Obrigatório**|

#### Visualização de credencial pelo ID

```http
  get /credentials:/id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id da credencial`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |


#### Visualização de todas as credenciais

```http
  get /credentials
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Deletar credencial pelo ID

```http
  delete /credentials:/id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id da credencial`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |


#### Criar cartão

```http
  POST /cards
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. `titulo do cartão`|
|`name `     |`string`|**Obrigatório**. |
|`number `     |`number`|**Obrigatório**.`numero do cartão` |
|`password `     |`string`|**Obrigatório**. |
|`is_virtual `     |`Boolean`|**Obrigatório**. `true ou false`|
|`type `     |`string`|**Obrigatório**.`"crédito", "débito" ou "ambos"` |
|`securityCode `     |`string`|**Obrigatório**. `CVC composta por 3 numeros`|
|`expirationDate `     |`string`|**Obrigatório**. `data de vencimento do cartão (mês/ano)`|


#### Visualização do cartão pelo id

```http
  get /cards/:id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `number` | **Obrigatório**.`id do cartão`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Visualização de todos os cartões

```http
  GET /cards
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Deletar cartão pelo id

```http
  DELETE /cards/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id do cartão`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |



#### Criar notas

```http
  POST /notes
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |
| `title`      | `string` | **Obrigatório**. `titulo da nota` |
|`annotation `     |`string`| `anotação do usuario`|

#### Visualização de todas as notas

```http
  GET /notes
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Visualização de nota pelo id

```http
  GET /notes/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id da nota`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Deletar notas pelo id

```http
  DELETE /notes/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id da nota`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Criação de wifi
```http
  POST /wifi
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |
| `title`      | `string` | **Obrigatório**. `titulo do wifi` |
|`name `     |`string`| **Obrigatório**|
|`password `     |`string`| **Obrigatório**|


#### Visualização de todas as redes

```http
  GET /wifi
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |

#### Visualização de rede pelo id

```http
  GET /wifi/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id do wifi`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |


#### Deletar rede pelo id

```http
  DELETE /wifi/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.`id do wifi`|
| `Bearer Token`      | `string` | **Obrigatório**. `Token do usuario logado` |
