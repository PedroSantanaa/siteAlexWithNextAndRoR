class Project < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  belongs_to :category

  has_many_attached :documents
end
