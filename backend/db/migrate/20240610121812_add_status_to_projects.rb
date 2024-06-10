class AddStatusToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :status, :string, default: 'novo'
  end
end
