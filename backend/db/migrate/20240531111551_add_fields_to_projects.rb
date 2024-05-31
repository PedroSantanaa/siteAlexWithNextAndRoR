class AddFieldsToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :estado, :string
    add_column :projects, :concessionaria, :string
    add_column :projects, :cpf, :string
    add_column :projects, :cnpj, :string
    add_column :projects, :tipo_disjuntor, :string
    add_column :projects, :valor_disjuntor, :string
    add_column :projects, :latitude, :decimal
    add_column :projects, :longitude, :decimal
    add_column :projects, :total_power, :decimal
  end
end
