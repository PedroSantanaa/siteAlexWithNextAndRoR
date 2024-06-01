class RemoveCategoryIdFromProjects < ActiveRecord::Migration[7.1]
  def change
    remove_reference :projects, :category, null: false, foreign_key: true
  end
end
