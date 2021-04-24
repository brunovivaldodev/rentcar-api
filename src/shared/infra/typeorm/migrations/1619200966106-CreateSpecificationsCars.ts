import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSpecificationsCars1619200966106 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "specifications_cars",
      columns: [
        {
          name: "id",
          type: 'uuid',
          generationStrategy: 'uuid',
          default: "uuid_generate_v4()"
        },
        {
          name: "car_id",
          type: 'uuid',
        },
        {
          name: 'specification_id',
          type: 'uuid'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }));

    await queryRunner.createForeignKey("specifications_cars",
      new TableForeignKey({
        name: 'FKSpecificationsCars',
        columnNames: ['specification_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'specifications',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    )

    await queryRunner.createForeignKey("specifications_cars",
      new TableForeignKey({
        name: 'FKCarSpecifications',
        columnNames: ['car_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("specifications_cars", 'FKCarSpecifications')
    await queryRunner.dropForeignKey("specifications_cars",'FKSpecificationsCars')
    await queryRunner.dropTable('specifications_cars')
  }

}
