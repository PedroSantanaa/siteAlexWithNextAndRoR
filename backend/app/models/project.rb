class Project < ApplicationRecord
  validates :name, presence: true
  belongs_to :user

  has_many :documents, dependent: :destroy
  accepts_nested_attributes_for :documents
end
