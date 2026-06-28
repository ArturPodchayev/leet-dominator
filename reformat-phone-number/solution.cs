public class Solution {
        public string ReformatNumber(string number)
        {
            int limit = 4;
            int limitPoint = 0;
            int count = 0;
            //先回頭找出限制點
            for (int i = number.Length - 1; i >= 0; i--)
            {
                if (Char.IsDigit(number[i]))
                {
                    count++;

                    if(count >= limit)
                    {
                        limitPoint = i;
                        count = 0;
                        break;
                    }
                }
            }

            int groupStandard = 3;
            string temp = "";
            string groupSplitStandard = "-";
            int lastPointer = -1; //形成group的點都不能算到lastSection
            //從頭邊走邊做出字串，使用stringbuilder，因為是單一字串
            StringBuilder result = new StringBuilder(); 
            for (int i = 0; i < number.Length - 1; i++)
            {
                if (Char.IsDigit(number[i]))
                {
                    temp += number[i];
                    count++;

                    if (temp.Length >= groupStandard)
                    {
                        result.Append(temp);
                        result.Append(groupSplitStandard);
                        count = 0;
                        temp = "";
                        lastPointer = i;
                    }
                }

                if( i >= limitPoint && temp.Length <= 1) //temp.Length <= 1 剛好4個digit沒形成group也要break
                {
                    break;
                }
            }

            //超過限制點就開始處理尾巴
            //2 digits: A single block of length 2.
            //3 digits: A single block of length 3.
            //4 digits: Two blocks of length 2 each.
            string lastSection = "";
            for (int i = number.Length - 1; i >= 0; i--)
            {
                if (Char.IsDigit(number[i]))
                {                    
                    if (i <= lastPointer)
                    {
                        break;
                    }
                    lastSection = number[i] + lastSection;
                }
            }

            switch(lastSection.Length)
            {
                case 2:
                    result.Append(lastSection);
                    break;
                case 3:
                    result.Append(lastSection);
                    break;
                case 4:
                    result.Append(lastSection.Substring(0,2));
                    result.Append(groupSplitStandard);
                    result.Append(lastSection.Substring(2, 2));
                    break;
                default:
                    result.Append(lastSection);
                    break;

            }

            return result.ToString();
        }
}
