class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
  has_many :projects, dependent: :destroy
  has_one :company, dependent: :destroy

  def build_company(attributes = {})
    company = Company.new(attributes)
    company.user = self
    company
  end
end
