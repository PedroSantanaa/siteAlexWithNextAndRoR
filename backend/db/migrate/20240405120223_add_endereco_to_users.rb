class AddEnderecoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :cep, :string, default: ''
    add_column :users, :estado, :string, default: ''
    add_column :users, :rua, :string, default: ''
    add_column :users, :bairro, :string, default: ''
    add_column :users, :cidade, :string, default: ''
    add_column :users, :numero, :string, default: ''
    add_column :users, :complemento, :string, default: ''
  end
end
