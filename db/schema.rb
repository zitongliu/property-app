# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161218235044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "prices", force: :cascade do |t|
    t.text     "month"
    t.text     "year"
    t.integer  "mean_b2"
    t.integer  "mean_b3"
    t.integer  "mean_b4"
    t.integer  "suburb_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "suburbs", force: :cascade do |t|
    t.text     "name"
    t.integer  "postcode"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.text     "email"
    t.text     "first_name"
    t.text     "last_name"
    t.text     "gender"
    t.text     "income"
    t.text     "mobile_number"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

end
