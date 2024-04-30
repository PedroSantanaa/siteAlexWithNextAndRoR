class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :name, :role, :cep, :estado, :rua, :bairro, :cidade, :numero, :complemento, :telefone, :cpf
end
