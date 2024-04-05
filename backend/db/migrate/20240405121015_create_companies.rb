class CreateCompanies < ActiveRecord::Migration[7.1]
  def change
    create_table :companies do |t|
      t.string :cnpj,              null: false, default: ""
      t.string :nome_fantasia,              null: false, default: ""
      t.string :razao_social,              null: false, default: ""
      t.string :registro_estadual,              null: false, default: ""
      t.string :registro_municipal,              null: false, default: ""
      t.string :cep,              null: false, default: ""
      t.string :estado,              null: false, default: ""
      t.string :cidade,              null: false, default: ""
      t.string :rua,              null: false, default: ""
      t.string :numero,              null: false, default: ""
      t.string :bairro,              null: false, default: ""
      t.string :complemento,              null: false, default: ""

      t.timestamps
    end
  end
end
