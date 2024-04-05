class AddSomeFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :cpf, :string, null: false, default: ""
    add_column :users, :telefone, :string, null: false, default: ""
  end
end
