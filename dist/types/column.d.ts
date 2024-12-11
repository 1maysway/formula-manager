export declare enum ColumnType {
    Id = "id",
    String = "string",
    Long = "long",
    Decimal = "decimal",
    Boolean = "boolean",
    Date = "date",
    Time = "time",
    DateTime = "date_time"
}
export interface Column {
    name: string;
    type: ColumnType;
}
