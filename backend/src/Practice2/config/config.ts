import dotenv from "dotenv";


class Config{
    public static  readonly PORT=process.env["PORT"];
    public static readonly MONGO_URL=process.env["MONGO_URL"]||"";
}
dotenv.config();
export default Config
