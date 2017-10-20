# Decision Maker
Http triggered lambda functions for decision making, which can be integrated with slack commands.
Actually this is an example to see how to use AWS step functions for REST API and turns out it's not a good choice.

 - The cold start problem makes unexpected timeout in the flow
 - Step Functions runs asynchronously so there has to be a `parent` function to check the status of the state machine if you need the output to return synchronously, so delayed response is used here.

# How this works

## Create Emojis
  - Go to your slack team, and choose `Customize Your Team` -> `Emoji`.
  - Create the following emojis for dices. Related gifs can be found [here](http://www.xiazaizhijia.com/rjjc/100199.html).
    - dice_1
    - dice_2
    - dice_3
    - dice_4
    - dice_5
    - dice_6
  - Create the following emojis for coins, apparently for two sides of coins.
    - coin_1
    - coin_2

## Configure your AWS credentials
  - Install the [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) for your operating system.
  - Configure your AWS security access keys

    ```
      aws --profile decisionmaker configure
      AWS Access Key ID [None]: xxxxxxxxxxxxxxxx
      AWS Secret Access Key [None]: xxxxxxxxxxxxxxxxxxxx
      Default region name [None]: ap-southeast-2
      Default output format [None]: json
    ```

  - Activate the decisionmaker profile

    ```
      export AWS_PROFILE=decisionmaker
    ```

## Deploy serverless stack
   - Deploy the project by running the following commands:
    
      ```
      git clone https://github.com/jaypeng2015/decision-maker
      cd decision-maker
      yarn
      yarn deploy
      ```
      
   - Remember the endpoint shows in the result.
    
## Configure slack slash command
  - Go to your slack team, `Custom Integrations` -> `Slash Command` and then create a new command.
  - Choose a command name, normally `/roll`
  - Enter the API gateway endpoint as `URL`
  - Customize other fields as you want

## Try you commands
  - /roll (same as /roll dice)
  - /roll coin
