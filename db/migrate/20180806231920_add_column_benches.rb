class AddColumnBenches < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :lat, :float
    add_column :benches, :lng, :float
    add_column :benches, :description, :string
  end
end
